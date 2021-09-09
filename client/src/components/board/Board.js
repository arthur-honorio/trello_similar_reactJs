import { useState, useEffect } from "react"
import axios from "axios"

import Columns from "../columns/Columns"
import BoardContext from "./context"

//===========================================
//===========================================//STYLES
//===========================================

import { Container, InputNewColumn } from "./board.styles"
import { theme } from "../../styles/theme"

//===========================================
//===========================================//URL
//===========================================

const url = "http://localhost:8080/api/board/columns/"

//===========================================//===========================================
//===========================================//===========================================
//===========================================//===========================================
//===========================================//COMPONENT
//===========================================//===========================================
//===========================================//===========================================
//===========================================//===========================================

export default function Board() {
  //===========================================
  //===========================================//STATES
  //===========================================

  const [columns, setColumns] = useState([])
  const [columnName, setColumnName] = useState("")
  const [thisColumnId, setThisColumnId] = useState("")
  const [hidden, setHidden] = useState(true)
  const [clickedColumnId, setClickedColumnId] = useState("")

  //===========================================
  //===========================================//COMPONENT EFFECT
  //===========================================

  useEffect((_) => {
    axios
      .get(url)
      .then((response) => {
        const { column } = response.data
        setColumns(column)
      })
      .catch(console.log)
  }, [])

  //===========================================
  //===========================================//COMPONENTS FUNCTIONS
  //===========================================//GET
  //===========================================

  async function getColumns() {
    await axios
      .get(url)
      .then((response) => {
        const { column } = response.data
        setColumns(column)
      })
      .catch(console.log)
  }

  //===========================================
  //===========================================//POST
  //===========================================

  async function handleNewColumn(e) {
    let { value } = e.target

    if (e.keyCode === 13) {
      const randomIndex = Math.round(Math.random() * 9)

      const randomColor = theme["columnColor"][randomIndex]

      await axios
        .post(url, { name: value, color: randomColor })
        .catch(console.log)

      setHidden(!hidden)
      getColumns()

      e.target.value = ""
    }
  }

  //===========================================
  //===========================================//DELETE
  //===========================================

  async function handleDeleteColumn(e) {
    const id = e.target.nextElementSibling.childNodes[1].childNodes[1].innerHTML
    await axios.delete(`${url}${id}`).catch(console.log)
    getColumns()
  }

  //===========================================
  //===========================================//PUT
  //===========================================

  async function handleUpdateColumnName(e) {
    setThisColumnId(
      e.target.parentElement.parentElement.nextElementSibling.childNodes[1]
        .innerHTML
    )

    setColumnName(
      e.target.parentElement.parentElement.nextElementSibling.childNodes[0]
        .innerHTML
    )

    const newName = e.target.value

    if (e.keyCode === 13) {
      newName &&
        (await axios
          .put(`${url}${thisColumnId}`, { name: newName })
          .then((res) => {
            setColumnName(res.data.column.name)
          })
          .catch(console.log))

      getColumns()

      setColumnName(newName)
      setClickedColumnId("")
      e.target.value = ""

      newName || alert("Favor inserir um novo nome para o Grupo.")
    }

    if (e.keyCode === 27) {
      setClickedColumnId("")
      e.target.value = ""
      newName || alert("Favor inserir um novo nome para o Grupo.")
    }
  }

  //===========================================
  //===========================================//RETURN
  //===========================================

  return (
    <BoardContext.Provider
      value={{
        columns,
        clickedColumnId,
        setClickedColumnId,
        handleDeleteColumn,
        handleUpdateColumnName,
      }}
    >
      <Container>
        {columns.map((column) => {
          return (
            thisColumnId === column._id && (column.name = columnName),
            (
              <Columns
                key={column._id}
                currentColumnId={column._id}
                currentColumnName={column.name}
                currentColumnColor={column.color}
              />
            )
          )
        })}
        <InputNewColumn
          type="text"
          name="name"
          placeholder="+    Novo Grupo"
          onKeyDown={handleNewColumn}
        />
      </Container>
    </BoardContext.Provider>
  )
}
