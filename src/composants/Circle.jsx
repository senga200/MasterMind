import React from "react";

function Circle({ color }) {
  const gradient = `linear-gradient(to top, ${color}, #D8D8D8)`;

  return (
    <div
      className="circle-container"
      style={{
        background: gradient,
      }}
    ></div>
  );
}

export default Circle;
