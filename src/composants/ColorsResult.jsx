import React from "react";
import CircleResult from "./CircleResult";

function ColorsResult() {
  const colorsResult = ["black", "white", "black", "white"];

  return (
    <div className="colorsResult-container">
      <div className="colorsResult-element">
        {colorsResult.map((colorResult, index) => (
          <CircleResult
            key={`colorResult-${index}`}
            colorResult={colorResult}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorsResult;
