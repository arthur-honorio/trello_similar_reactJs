import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background: ${props => props.theme.color.backgroundColor};
  }

  ul {
    list-style: none;
  }
`
