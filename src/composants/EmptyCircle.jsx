import React from "react";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function EmptyCircle({ onDrop, onDragOver }) {
  const border = `5px solid  #aa663b`;
  const backgroundColor = `#51311d`;

  return (
    <div
      className="emptyCircle-container"
      style={{
        border: border,
        backgroundColor: backgroundColor,
      }}
      onDrop={(e) => onDrop(e)}
      onDragOver={(e) => onDragOver(e)}
    ></div>
  );
}

export default EmptyCircle;
