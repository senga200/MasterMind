import React from "react";
import Circle from "./Circle";
import EmptyCircle from "./EmptyCircle";
import ColorsResult from "./ColorsResult";
import { useAppContext } from "../Context";
import { useState } from "react";

function Rows({ color }) {
  const { appState, dispatch } = useAppContext();
  //const [selectedColors, setSelectedColors] = useState([]);

  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
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
    dispatch({ type: "SET_SELECTED_COLOR", payload: color });
    // Mettre à jour l'état selectedColors en utilisant l'état actuel
    const updatedSelectedColors = [
      ...appState.selectedColors,
      appState.selectedColor,
    ];
    dispatch({ type: "SET_SELECTED_COLORS", payload: updatedSelectedColors });

    console.log("color cell : " + appState.selectedColor);
    console.log("rowIndex : " + rowIndex);
    console.log("cellIndex : " + cellIndex);
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
