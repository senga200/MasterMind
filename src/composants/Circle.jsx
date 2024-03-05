import React from "react";
import { useAppContext } from "../Context";

function Circle({ color, handleDragStart }) {
  const { dispatch } = useAppContext();
  const gradient = `linear-gradient(to top, ${color}, #D8D8D8)`;

  const handleClick = () => {
    //alert("click");

    dispatch({ type: "SET_SELECTED_COLOR", payload: color });
  };

  return (
    <div
      className="circle-container"
      style={{
        background: gradient,
      }}
      draggable="true"
      onDragStart={handleDragStart}
      onClick={handleClick}
      data-color={color}
    ></div>
  );
}

export default Circle;
