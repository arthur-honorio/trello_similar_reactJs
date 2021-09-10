import React, { useState, useContext } from "react"
import { useDrag } from "react-dnd"

import PopUp from "../popup/PopUp"
import ColumnContext from "../columns/context"

//===========================================
//===========================================//STYLES
//===========================================

import { MdRemoveCircle } from "react-icons/md"
import {
  Container,
  Container2,
  Button,
  Button2,
  Flex,
  Close,
} from "./tasks.styles"

//===========================================//===========================================
//===========================================//===========================================
//===========================================//===========================================
//===========================================//COMPONENT
//===========================================//===========================================
//===========================================//===========================================
//===========================================//===========================================

export default function Tasks({
  currentTaskName,
  currentTaskId,
  currentTaskContent,
  currentTaskColumnId,
  currentColumnColor,
  handleDeleteTask,
}) {
  //===========================================
  //===========================================//DRAGGING CONFIG
  //===========================================

  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: {
      id: currentTaskId,
      taskColumnId: currentTaskColumnId,
      // columnId: currentTaskColumnId,
      name: currentTaskName,
      content: currentTaskContent,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      ok: monitor.didDrop(),
    }),
  })

  //===========================================
  //===========================================//STATES
  //===========================================

  const [showPopUpInfo, setShowPopUpInfo] = useState(false)

  //===========================================
  //===========================================//COLUMNS CONTEXT
  //===========================================

  const {
    didDrop,
    handleCleanInfo,
    taskIdForInfo,
    setTaskIdForInfo,
    taskIdForEdit,
    setTaskIdForEdit,
  } = useContext(ColumnContext)

  //===========================================
  //===========================================//FUNCTIONS
  //===========================================

  function handleGetTaskIdForEdit(e) {
    setTaskIdForEdit(e.target.previousSibling.innerHTML)
  }

  function handleCloseUpdate() {
    setTaskIdForEdit(0)
  }

  function handleCloseUpdateWithEsc(e) {
    if (e.keyCode === 27) {
      handleCloseUpdate()
    }
  }

  function handleGetTaskIdForInfo(e) {
    setTaskIdForInfo(
      e.target.parentElement.previousSibling.childNodes[1].childNodes[0]
        .innerHTML
    )
  }

  function handleShowPopUpInfo() {
    setShowPopUpInfo(!showPopUpInfo)
  }

  function handleCloseInfo() {
    setTaskIdForInfo(0)
  }

  //===========================================
  //===========================================//RETURN
  //===========================================

  return (
    <>
      <Container2 drop={didDrop} color={currentColumnColor}>
        <PopUp
          currentTaskId={currentTaskId}
          currentColumnColor={currentColumnColor}
          taskIdForEdit={taskIdForEdit}
          handleCloseUpdate={handleCloseUpdate}
          handleCloseUpdateWithEsc={handleCloseUpdateWithEsc}
        />
        <Container
          color={currentColumnColor}
          ref={dragRef}
          isDragging={isDragging}
        >
          <Flex iscontent={!currentTaskContent}>
            <h3 onClick={handleShowPopUpInfo}>{currentTaskName}</h3>

            <Button onClick={handleGetTaskIdForEdit}>
              <h3 hidden>{currentTaskId}</h3>
              <div className="edit">Editar</div>
            </Button>

            <Button2>
              <MdRemoveCircle
                size={20}
                onClick={(_) => handleDeleteTask(currentTaskId)}
              />
            </Button2>
          </Flex>
          <div>
            <div
              hidden={!currentTaskContent}
              onClick={handleGetTaskIdForInfo}
              className="furtherinformation"
            >
              + Informações
            </div>
            <div hidden={taskIdForInfo !== currentTaskId} className="popupinfo">
              <h5>Informações</h5>
              <p className="content">{currentTaskContent}</p>
              <div onClick={handleCleanInfo} className="clean">
                Apagar Informações
              </div>

              <Close color={currentColumnColor} onClick={handleCloseInfo} />
            </div>
          </div>
        </Container>
      </Container2>
    </>
  )
}
