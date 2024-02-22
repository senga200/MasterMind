import React from "react";

function EmptyCircle() {
  const border = `5px solid  #aa663b`;
  const backgroundColor = `#51311d`;

  return (
    <div
      className="emptyCircle-container"
      style={{
        border: border,
        backgroundColor: backgroundColor,
      }}
    ></div>
  );
}

export default EmptyCircle;
