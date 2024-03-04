import React from "react";
import { useAppContext } from "../Context";
import { useState } from "react";

function Butons() {
  const { appState, dispatch } = useAppContext();

  const handleClickCheck = () => {
    const selectedColors = appState.selectedColors;
    const secretCode = appState.secretCode;
    let result = [];

    selectedColors.forEach((color, index) => {
      if (color === secretCode[index]) {
        //result.push("black");
        alert("black");
      } else if (secretCode.includes(color)) {
        //result.push("white");
        alert("white");
      } else {
        // result.push("empty");
        alert("empty");
      }

      console.log("result" + result);
    });
    //  dispatch({ type: "SET_RESULT", payload: result });
  };

  return (
    <div className="buttons-container">
      <div className="buttons-element">
        <button className="button" onClick={handleClickCheck}>
          Check
        </button>
        <button className="button">Reset</button>
      </div>
    </div>
  );
}

export default Butons;
