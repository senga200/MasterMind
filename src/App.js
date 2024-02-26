import React, { useReducer } from "react";
import "./App.css";
import AsciiArt from "./composants/AsciiArt";
import Board from "./composants/Board";
import reducer from "./Reducer";
import AppContext from "./Context";

function App() {
  const [appState, dispatch] = useReducer(reducer, {
    selectedColor: "",
    test: true,
  });
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div>
        <AsciiArt />
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export default App;
