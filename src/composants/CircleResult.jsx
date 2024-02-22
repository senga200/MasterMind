import React from "react";

function CircleResult({ colorResult }) {
  // const gradient = `linear-gradient(to top, ${colorResult}, #D8D8D8)`;
  const color = colorResult;

  return (
    <div
      className="circleResult-container"
      style={{
        // background: gradient,

        backgroundColor: color,
      }}
    ></div>
  );
}

export default CircleResult;
