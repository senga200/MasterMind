import React from "react";
import Circle from "./Circle";
import EmptyCircle from "./EmptyCircle";
import ColorsResult from "./ColorsResult";
import { useAppContext } from "../Context";
import { useState } from "react";

function Rows({ color }) {
  // const colors = [
  //   "#94000D",
  //   "blue",
  //   "green",
  //   "yellow",
  //   "#FB4901",
  //   "#4C4C4C",
  //   "white",
  //   "#D810AD",
  // ];
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const { appState, dispatch } = useAppContext();
  //récupérer la couleur gardée dans le state
  // Initialiser l'état pour gérer 10 lignes de 4 cellules chacune
  const [cells, setCells] = useState(
    Array.from({ length: 10 }, () => Array(4).fill(false))
  );

  const handleClick = (rowIndex, cellIndex) => {
    alert("click");
    // Mettre à jour l'état de la cellule spécifique dans la ligne spécifique avec la couleur sélectionnée
    setCells(
      cells.map((row, i) =>
        i === rowIndex
          ? row.map((cell, j) =>
              j === cellIndex
                ? { color: appState.selectedColor, active: true }
                : cell
            )
          : row
      )
    );

    //afficher la couleur gardée dans le state sur la cellule cliquée
    dispatch({ type: "SET_SELECTED_COLOR", payload: color });

    console.log("color cell" + appState.selectedColor);
    console.log("rowIndex" + rowIndex);
    console.log("cellIndex" + cellIndex);
  };
  return (
    <div className="rows-container">
      <div className="rows-toTry">
        {numbers.map((number, rowIndex) => (
          <div key={`toTry-${number}`} className="cell-toTry">
            {number}
            {cells[rowIndex].map((cell, cellIndex) => (
              <div
                key={`cell-${rowIndex}-${cellIndex}`}
                onClick={() => handleClick(rowIndex, cellIndex)}
              >
                {cell.active ? (
                  <Circle color={cell.color} />
                ) : (
                  <EmptyCircle color={color} />
                )}
              </div>
            ))}
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
