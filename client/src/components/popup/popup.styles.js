import styled from "styled-components"

import { propsF } from "../../styles/theme"

const Container = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  
  display: ${props => props.hidden ? "none" : "flex"};
  flex-direction: column;

  padding: 20px;
  gap:10px;
  
  width: 40vw;
  min-width: 450px;
  max-width: 450px;

  background-color: white;
  border-radius: ${propsF("borderRadius", "medium")};
  border-color: ${props => props.columnColor};
  border: ${propsF("border", "small")};
  z-index: 10;

background-blend-mode: exclusion;

  h3{
    font-size: ${propsF("fonts", "size", "subTitle")};
    margin-bottom: 0;
  }

  .input-e-button {
    position: relative;

    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap:5px;

    width: 100%;
    min-height: 150px;

    margin-top: 10px;    
  }

  input, textarea{
    font-family: ${propsF("fonts", "primary")};
    font-size: ${propsF("fonts", "size", "text")};
    font-weight: ${propsF("fonts", "weight", "thin" )};
    word-wrap: break-word;


    min-width: 400px;
    max-width: 400px;
    height: 40px;

    padding: 0 20px;
    display: flex;
    align-items: center;

    background-color: ${propsF("color", "background")};
    border: none;
    outline: none;
    border-radius: ${propsF("borderRadius", "medium")};
    
    ::placeholder{
      color: black;
      opacity: 1;
      text-align: left;
    }

    :focus{
      ::placeholder {
        visibility: hidden;
        opacity: 0
      }
    }
  }

  textarea {
    margin: 10px 0;
    padding: 15px ;
    height: 80px;

    resize: none;
  }

  .save {
    cursor: pointer;
    width: 30%;
    height: 30px;

    color: white;
    
    font: ${propsF("fonts", "primary")};
    font-size: ${propsF("fonts", "size", "text")};
    font-weight: ${propsF("fonts", "weight", "bold")};
    border-radius: ${propsF("borderRadius", "small")};
    background: ${propsF("color", "primary")}
  }

`

const Close = styled.button`
  top: 15px;
  right: 25px;
  cursor: pointer;
  background-color: #0000;

  position: absolute;

  :after{
    position: relative;
    bottom: 4px;
    display: block;
    content: "+";
    transform: rotate(45deg);
    margin: 0 auto;
    font-weight: bold;
    color: ${propsF("color", "primary")};
    font-size: 40px;
  }
`

export { Container, Close, }