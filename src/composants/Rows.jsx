import React from "react";
import Circle from "./Circle";
import EmptyCircle from "./EmptyCircle";
import ColorsResult from "./ColorsResult";
import { useAppContext } from "../Context";
import { useState } from "react";

function Rows({ color }) {
  const { appState, dispatch } = useAppContext();
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragging, setDragging] = useState(false);

  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const [cells, setCells] = useState(
    Array.from({ length: 10 }, () => Array(4).fill(false))
  );

  const handleDragStart = (e, item) => {
    console.log("draggedItem", draggedItem);
    console.log("drag start");
    console.log("e.dataTransfer", e.dataTransfer);
    e.dataTransfer.setData("text/plain", item.color);
    setDraggedItem(item);
    setDragging(true);
  };

  // const handleDragStart = (e) => {
  //   e.preventDefault();
  //   console.log("test");
  // };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("handleDragOver");
  };

  const handleDrop = (e, rowIndex, cellIndex) => {
    e.preventDefault();
    console.log("handleDrop", e.target);
    const item = e.dataTransfer.getData("text/plain");
    console.log("item", item);
    if (item && item.length > 0) {
      setCells(
        cells.map((row, i) =>
          i === rowIndex
            ? row.map((cell, j) =>
                j === cellIndex ? { color: item, active: true } : cell
              )
            : row
        )
      );
      dispatch({ type: "SET_SELECTED_COLOR", payload: item });
      const updatedSelectedColors = [...appState.selectedColors, item];
      dispatch({ type: "SET_SELECTED_COLORS", payload: updatedSelectedColors });

      console.log("color cell : " + item);
      console.log("rowIndex : " + rowIndex);
      console.log("cellIndex : " + cellIndex);
      console.log("heeeeyy item : " + item);
    }
    setDraggedItem(null);
    setDragging(false);
    console.log("drop end");
  };

  const handleClick = (rowIndex, cellIndex) => {
    if (dragging) {
      return;
    }
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
      <div
        className="rows-toTry"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {numbers.map((number, rowIndex) => (
          <div key={`toTry-${number}`} className="cell-toTry">
            {number}

            {cells[rowIndex].map((cell, cellIndex) => (
              <div
                key={`cell-${rowIndex}-${cellIndex}`}
                onClick={() => handleClick(rowIndex, cellIndex)}
              >
                {cell.active ? (
                  <Circle
                    draggable="true"
                    color={cell.color}
                    //onDragStart={handleDragStart}
                    onDragStart={(e) =>
                      handleDragStart(e, {
                        color: cell.color,
                        index: `${rowIndex}-${cellIndex}`,
                      })
                    }
                  />
                ) : (
                  <EmptyCircle
                    color={color || "transparent"}
                    onDrop={(e) => handleDrop(e, rowIndex, cellIndex)}
                    onDragOver={handleDragOver}
                  />
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
