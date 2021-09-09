import { DndProvider, } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import GlobalStyles from "./styles/global"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Board from "./components/board/Board"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
// import Board from "./components/board/board"

function App() {
  return (
    <DndProvider useDragDropManager backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Board/>
            </Route>
          </Switch>
        </Router>
        <GlobalStyles/>
      </ThemeProvider>
    </DndProvider>
  );
}

export default App;
