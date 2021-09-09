import styled, { css } from "styled-components"

import { propsF } from "../../styles/theme"

const Container = styled.div`
  position: relative;

  width: 100%;
  height: auto;

  margin-top: ${propsF("size", "medium")};
  padding: ${propsF("size", "medium")};

  border-radius: 10px 10px 0 0;
  border-bottom: ${propsF("border", "medium")};
  border-bottom-color: ${(props) => props.color};

  background: white;
  color: ${propsF("color", "dark")};

  cursor: grab;

  .furtherinformation {
    position: absolute;
    bottom: 10px;

    max-width: 230px;

    font-size: ${propsF("fonts", "size", "small")};
    word-wrap: break-word;

    cursor: pointer;
    opacity: ${(props) => (props.isvisibe ? 0 : 1)};
  }

  .popupinfo {
    position: absolute;
    left: 70%;
    top: 60%;

    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    min-width: 200px;
    max-width: 100%;
    min-height: 100px;

    padding: 20px;
    z-index: 10;

    border-radius: 10px;
    border: ${propsF("border", "small")} ${(props) => props.color};

    word-wrap: break-word;
    color: #000;

    background: ${propsF("color", "background")};

    .content {
      margin-top: 15px;

      line-height: 18px;
      font-size: ${propsF("fonts", "size", "text")};
      font-weight: ${propsF("fonts", "weight", "thin")};
    }

    .clean {
      width: 100%;
      padding-top: 10px;
      margin-top: 15px;

      border-top: ${propsF("border", "small")} #0003;

      text-align: right;
      font-size: ${propsF("fonts", "size", "small")};

      cursor: pointer;
      
      color: #000a;

    }
  }

  h3 {
    min-width: 0px;
    max-width: 70%;
    margin-right: auto;

    word-wrap: break-word;
    font-weight: ${propsF("fonts", "weight", "semi")};
    font-size: ${propsF("fonts", "size", "subSubTitle")};

    :hover {
      cursor: text;
    }
  }

  ${(props) =>
    props.isDragging &&
    css`
      display: none;

      cursor: grabbing;
    `}
  ${(props) =>
    props.endDrag &&
    css`
      display: none;

      cursor: grabbing;
    `}
`

const Container2 = styled(Container)`
  display: ${(props) => (props.drop ? "none" : "block")};

  padding: 0;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding-bottom: ${(props) => (props.iscontent ? 0 : "20px")};
`

const Button = styled.button`
  position: relative;
  right: 0;

  min-width: 20px;
  max-width: 20px;
  height: 20px;
  margin-right: 15px;

  background: #0000;
  cursor: pointer;

  :hover {
    color: darksalmon;
  }

  .edit {
    font-size: ${propsF("fonts", "size", "small")};
    cursor: pointer;
  }
`

const Button2 = styled(Button)`
  margin-right: 0;
`

const Close = styled.button`
  top: 15px;
  right: 25px;

  cursor: pointer;
  background-color: #0000;

  position: absolute;

  :after {
    position: relative;
    bottom: 4px;

    display: block;
    margin: 0 auto;
    
    content: "+";
    
    transform: rotate(45deg);
    font-weight: bold;
    color: ${(props) => props.color};
    font-size: 20px;
  }
`
export { Container, Container2, Flex, Button, Button2, Close }
