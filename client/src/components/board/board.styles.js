import styled from "styled-components"
import { propsF } from "../../styles/theme"

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 15px;
  padding: 40px;


`

const InputNewColumn = styled.input`
  width: 50px;
  height: 50px;
  margin-top: 5px;
  border-radius: 25px;
  background: ${propsF("color", "secondary")};
  /* color: ${propsF("color", "secondary")}; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;
  font-size: 19px;
  transition: all 500ms ease;
  
  :hover {
    width: 200px;
    cursor: pointer;
  }

  ::placeholder {
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
    /* color: ${propsF("color", "secondaryLight")}; */
  }
  
  :focus {
    width: 300px;
    padding: 0 30px;
    color: white;

    ::placeholder{
      visibility: hidden;
    }
    ::fullscreen {
      background: black;
    }
  }

`
export { Container, InputNewColumn }
