import React from "react";
import Circle from "./Circle";

function Colors() {
  const colors = [
    "#94000D",
    "blue",
    "green",
    "yellow",
    "#FB4901",
    "#4C4C4C",
    "white",
    "#D810AD",
  ];

  return (
    <div className="colors-container">
      <div className="colors-element">
        {colors.map((color, index) => (
          <Circle key={`color-${index}`} color={color} />
        ))}
      </div>
    </div>
  );
}

export default Colors;
