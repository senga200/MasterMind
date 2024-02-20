import React from "react";
import Rows from "./Rows";
import SecretCode from "./SecretCode";
import Colors from "./Colors";
import Buttons from "./Buttons";

function Board() {
  return (
    <div className="board-container">
      <SecretCode />
      <Rows />
      <Colors />
      <Buttons />
    </div>
  );
}

export default Board;
