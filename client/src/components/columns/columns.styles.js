import styled from "styled-components"

import { propsF } from "../../styles/theme"

const Container = styled.div`
  position: relative;

  width: 20rem;
  height: auto;
  flex: 0 0 20rem;

  padding: ${propsF("size", "medium")};

  border: ${props => props.over ? propsF("border", "medium") : propsF("border", "small")};
  border-color: ${props => props.over ? "green" : props.color};
  border-radius: ${propsF("borderRadius", "small")};

  background: ${propsF("color", "background")};
  color: ${propsF("color", "dark")};
  

  h2 {
    width: 85%;
    margin-left: ${propsF("size", "xSmall")};
    margin-bottom: ${propsF("size", "big")};
    font-size: ${propsF("fonts", "size", "subTitle")};
    font-weight: ${propsF("fonts", "weight", "bold")};
    word-wrap:break-word ;
  }
`
const UpdateColumnName = styled.div`
  position: absolute;
  top: 15px;
  display: ${props => (props.isshown ? "flex" : "none")};
  z-index: 10;
  width: 100%;
  word-wrap: break-word;
  
  .input {
    max-width: 275px;
    width: calc(100% - 20px);
    height: 100%;

    padding: 10px;

    border-radius: 5px;
    border: ${propsF("border", "small")};
    border-color: ${propsF("color", "secondary")};
    outline: none;

    background: ${propsF("color", "background")};

    font-family: ${propsF("fonts", "primary")};
    font-size: ${propsF("fonts", "size", "subSubTitle")};
  }
`

const Close = styled.button`
  top: ${propsF("size", "medium")};
  right: ${propsF("size", "medium")};
  border-radius: 50%;
  /* border: ${propsF("border", "medium")}; */
  /* border-color: ${props => props.color}; */
  width: ${propsF("size", "medium")};
  height: ${propsF("size", "medium")};
  background: #0000;
  cursor: pointer;

  position: absolute;

  :after {
    position: relative;
    top: -5.3px;
    left: .55px;
    display: block;
    content: "+";
    transform: rotate(45deg);
    margin: 0 auto;
    font-family: ${propsF("fonts", "primary")};
    font-weight: ${propsF("fonts", "weight", "bold")};
    font-size: ${propsF("fonts", "size", "title")};
    color: ${props => props.color};
  }
`

const Footer = styled.footer`
  position: relative;
  bottom: 0;
  height: ${propsF("size", "xBig")};
  margin-top: ${propsF("size", "medium")};

  .buttonNewTask {
    position: absolute;
    right: ${propsF("size", "small")};;
    bottom: ${propsF("size", "xSmall")};
    background-color: #0000;
    opacity: 0;

  }
`
const TextArea = styled.input`
  position: absolute;
  bottom: 0;

  width: 100%;
  padding: ${propsF("size", "small")};
  text-align: center;
  
  border-radius: ${propsF("borderRadius", "small")};
  border: none;
  outline: none;
  
  font-size: ${propsF("fonts", "size", "text")};
  word-wrap: break-word;

  transition: 200ms;

  ::placeholder {
    color: ${propsF("color", "dark")};
    font-family: ${propsF("fonts", "primary")};
    font-weight: ${propsF("fonts", "weight", "semi")};
    font-size: ${propsF("fonts", "size", "text")};
    opacity: 1;
  }

  :focus {
    background: ${props => props.color};

    color: black;
    font-family: ${propsF("fonts", "primary")};
    font-weight: ${propsF("fonts", "weight", "semi")};
    font-size: ${propsF("fonts", "size", "text")};
    text-align: left;
    padding: 10px 25px;

    ::placeholder {
      opacity: 0;
    }
  }
`
export { Container, TextArea, Close, Footer, UpdateColumnName }
