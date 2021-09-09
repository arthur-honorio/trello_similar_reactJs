import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useDrop } from "react-dnd"

import Tasks from "../tasks/Tasks"
import BoardContext from "../board/context"
import ColumnContext from "./context"

import { MdCheck } from "react-icons/md"

//===========================================
//===========================================//STYLES
//===========================================

import {
  Container,
  TextArea,
  Close,
  Footer,
  UpdateColumnName,
} from "./columns.styles"

//===========================================
//===========================================//URL
//===========================================

const url = "http://localhost:8080/api/board/tasks/"

//===========================================//===========================================
//===========================================//===========================================
//===========================================//===========================================
//===========================================//COMPONENT
//===========================================//===========================================
//===========================================//===========================================
//===========================================//===========================================

export default function Columns({
  currentColumnId,
  currentColumnName,
  currentColumnColor,
}) {
  //===========================================
  //===========================================DROP CONFIG
  //===========================================

  const [{ isOver, didDrop }, dropRef] = useDrop({
    accept: "TASK",
    hover(item, monitor) {
      // const IdDragged = item.id
      const ColumnIdDragged = item.columnId
      const ColumnIdTarget = currentColumnId

      if (ColumnIdDragged === ColumnIdTarget) {
        return
      }
    },
    drop: (item, monitor) =>
      updateTaskColumnId(currentColumnId, item.name, item.id, item.content),
    collect: (monitor) => ({
      didDrop: !!monitor.didDrop(),
      isOver: !!monitor.isOver(),
    }),
  })

  //===========================================
  //===========================================//STATES
  //===========================================

  const [taskIdForInfo, setTaskIdForInfo] = useState("")
  const [taskIdForEdit, setTaskIdForEdit] = useState("")
  const [allTasks, setAllTasks] = useState([])

  //===========================================
  //===========================================//CONTEXT FROM BOARD
  //===========================================

  const {
    columns,
    clickedColumnId,
    setClickedColumnId,
    handleDeleteColumn,
    handleUpdateColumnName,
  } = useContext(BoardContext)

  //===========================================
  //===========================================//COMPONENT EFFECT
  //===========================================

  useEffect((_) => {
    axios
      .get(url)
      .then((res) => {
        const { tasks } = res.data
        setAllTasks(tasks)
      })
      .catch(console.log)
  }, [])

  //===========================================
  //===========================================//COMPONENT FUNCTIONS
  //===========================================
  //===========================================//GET
  //===========================================

  async function getTasks() {
    await axios.get(url).then((res) => {
      const { tasks } = res.data
      setAllTasks(tasks)
    })
  }

  //===========================================
  //===========================================//DELETE
  //===========================================

  async function handleDeleteTask(taskId) {
    await axios.delete(`${url}${taskId}`).catch(console.log)
    getTasks()
  }

  //===========================================
  //===========================================//POST
  //===========================================

  async function postTask(taskName, columnIdNumber) {
    await axios
      .post(url, { name: `${taskName}`, columnId: `${columnIdNumber}` })
      .catch(console.log)

    getTasks()
  }

  async function handleNewTask(e) {
    let nameTask = e.target.value
    if (e.keyCode === 13) {
      nameTask && postTask(nameTask, currentColumnId)

      getTasks()
      e.target.value = ""

      nameTask || alert("Favor preencher com o nome da nova Atividade.")
    }
    if (e.keyCode === 27) {
      e.target.value = ""
    }
  }

  async function handleNewTaskClick(e) {
    let nameTask = e.target.parentNode.parentElement.childNodes[0].value

    nameTask && postTask(nameTask, columns.id)

    getTasks()
    e.target.value = ""

    nameTask || alert("Favor informar o nome da nova Atividade")
  }

  //===========================================
  //===========================================//PUT
  //===========================================

  async function updateTask(
    taskName,
    columnIdNumber,
    taskId,
    taskContent = ""
  ) {
    await axios
      .put(`${url}${taskId}`, {
        name: `${taskName}`,
        columnId: `${columnIdNumber}`,
        content: `${taskContent}`,
      })
      .catch(console.log)

    getTasks()
  }

  function handleUpdateTask(e) {
    const newName = e.target.previousSibling.previousSibling.value
    const thisTaskIdFromClick =
      e.target.previousSibling.previousSibling.previousSibling.innerHTML
    const content = e.target.previousSibling.value
    const thisTask = allTasks.filter((task) => task._id === thisTaskIdFromClick)
    const oldName = thisTask[0]["name"]
    const oldContent = thisTask[0]["content"]

    if (!!newName || !!content) {
      updateTask(
        newName || oldName,
        currentColumnId,
        thisTaskIdFromClick,
        content || oldContent
      )

      e.target.previousSibling.previousSibling.value = ""
      e.target.previousSibling.value = ""
    }
    setTaskIdForEdit("")
  }

  //===========================================
  //===========================================//PUT CHANGE COLUMN ON DRAG
  //===========================================

  async function updateTaskColumnId(
    columnIdNumber,
    itemName,
    itemId,
    itemContent
  ) {
    updateTask(itemName, columnIdNumber, itemId, itemContent)

    getTasks()
    // setTimeout(window.location.reload(), 100)
  }

  //===========================================
  //===========================================//PUT CLEAN INFO FROM TASK
  //===========================================

  async function handleCleanInfo(e) {
    const content = ""
    const id =
      e.target.parentElement.parentElement.previousSibling.children[1]
        .children[0].innerHTML
    await axios
      .put(`${url}${id}`, {
        content: `${content}`,
      })
      .catch(console.log)
    setTaskIdForInfo("")

    getTasks()
  }

  //===========================================
  //===========================================//ANOTHER FUNCTIONS
  //===========================================

  function getClickedColumnId(e) {
    setClickedColumnId(e.target.parentElement.children[1].innerHTML)
  }

  let newTasks = allTasks.filter((task, i) => allTasks.indexOf(task) === i)

  //===========================================
  //===========================================// RETURN
  //===========================================

  return (
    <ColumnContext.Provider
      value={{
        didDrop,
        handleCleanInfo,
        handleUpdateTask,
        taskIdForInfo,
        setTaskIdForInfo,
        taskIdForEdit,
        setTaskIdForEdit,
      }}
    >
      <Container ref={dropRef} color={currentColumnColor} over={isOver}>
        <Close onClick={handleDeleteColumn} color={currentColumnColor} />
        <header>
          <div>
            <UpdateColumnName isshown={clickedColumnId === currentColumnId}>
              <input
                className="input"
                placeholder={currentColumnName}
                onKeyDown={handleUpdateColumnName}
              />
            </UpdateColumnName>
          </div>
          <div onClick={getClickedColumnId}>
            <h2
              className="columnName"
              name="name"
              isshown={clickedColumnId === currentColumnId}
            >
              {currentColumnName}
            </h2>
            <h2 hidden name="column-id">
              {currentColumnId}
            </h2>
          </div>
        </header>

        {newTasks.map(
          (task) =>
            task.columnId === currentColumnId && (
              <Tasks
                key={task._id}
                currentTaskId={task._id}
                currentTaskName={task.name}
                currentTaskContent={task.content}
                currentTaskColumnId={task.columnId}
                currentColumnColor={currentColumnColor}
                handleDeleteTask={handleDeleteTask}
                handleUpdateTask={handleUpdateTask}
              />
            )
        )}

        <Footer>
          <TextArea
            name="newTask"
            placeholder="+ Adicionar Atividade"
            onKeyDown={handleNewTask}
            color={columns.color}
          />
          <button
            className="buttonNewTask"
            name="newTaskClick"
            onClick={handleNewTaskClick}
          >
            <MdCheck size={25} />
          </button>
        </Footer>
      </Container>
    </ColumnContext.Provider>
  )
}
