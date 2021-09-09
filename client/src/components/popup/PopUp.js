import { useContext } from "react"

import ColumnsContext from "../columns/context"

//===========================================
//===========================================//STYLES
//===========================================

import { Container, Close } from "./popup.styles"

//===========================================//===========================================
//===========================================//===========================================
//===========================================//===========================================
//===========================================//COMPONENT
//===========================================//===========================================
//===========================================//===========================================
//===========================================//===========================================

const PopUp = ({
  currentTaskId,
  currentColumnColor,
  handleCloseUpdate,
  handleCloseUpdateWithEsc,
}) => {
  //===========================================
  //===========================================//COLUMNS CONTEXT
  //===========================================

  const { handleUpdateTask, taskIdForEdit } = useContext(ColumnsContext)

  //===========================================
  //===========================================//RETURN
  //===========================================

  return (
    <>
      <Container
        columnColor={currentColumnColor}
        hidden={taskIdForEdit !== currentTaskId}
        onKeyDown={handleCloseUpdateWithEsc}
      >
        <Close onClick={handleCloseUpdate} />
        <div className="info">
          <h3>Editar Tarefa</h3>
          <div className="input-e-button">
            <h3 hidden>{currentTaskId}</h3>
            <input
              type="text"
              name="updated-task"
              placeholder="Atualizar Atividade"
            />
            <textarea
              wrap="hard"
              type="area-text"
              name="content"
              placeholder="Adicionar/Atualizar informações"
            />
            <button className="save" onClick={handleUpdateTask}>
              Salvar
            </button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PopUp
