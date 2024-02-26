import React from "react";
import { useAppContext } from "../Context";

function Circle({ color }) {
  const { dispatch } = useAppContext();
  const gradient = `linear-gradient(to top, ${color}, #D8D8D8)`;

  const handleClick = () => {
    alert("click");
    //garder la couleur cliquée dans le state de l'application pour l'utiliser dans Rows et RowsResult pour afficher la couleur cliquée dans la cellule correspondante de la ligne en cours de création par le joueur
    dispatch({ type: "SET_SELECTED_COLOR", payload: color });
  };

  return (
    <div
      className="circle-container"
      style={{
        background: gradient,
      }}
      onClick={handleClick}
    ></div>
  );
}

export default Circle;
