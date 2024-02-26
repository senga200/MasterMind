import React from "react";
import Circle from "./Circle";
import EmptyCircle from "./EmptyCircle";
import ColorsResult from "./ColorsResult";
import { useAppContext } from "../Context";
import { useState } from "react";

function Rows({ color }) {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const { appState, dispatch } = useAppContext();
  //récupérer la couleur gardée dans le state
  //etat local pour gérer l'affichage de circle ou emptyCircle pour chaque cellule
  const [cells, setCells] = useState(Array(10).fill(false));

  const handleClick = (index) => {
    alert("click");

    //afficher la couleur gardée dans le state sur la cellule cliquée
    dispatch({ type: "SET_SELECTED_COLOR", payload: color });
    setCells(cells.map((cell, i) => (i === index ? true : cell)));
    console.log("color cell" + appState.selectedColor);
    console.log("index" + index);
  };

  return (
    <div className="rows-container">
      <div className="rows-toTry">
        {numbers.map((number, index) => (
          <div
            key={`toTry-${number}`}
            className="cell-toTry"
            onClick={() => handleClick(index)}
          >
            {number}
            {/* <Circle />
            <Circle />
            <Circle />
            <Circle /> */}
            <EmptyCircle />
            <EmptyCircle />
            <EmptyCircle />
            <EmptyCircle />
          </div>
        ))}
      </div>

      <div className="rows-result">
        {numbers.map((number) => (
          <div key={`result-${number}`} className="cell-result">
            {number}
            <ColorsResult />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rows;
