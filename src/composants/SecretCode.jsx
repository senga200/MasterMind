import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import { useAppContext } from "../Context";

function SecretCode() {
  const { dispatch } = useAppContext();
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
  const [secretCode, setSecretCode] = useState([]);

  //console.log("secretCode", secretCode);

  useEffect(() => {
    const newSecretCode = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      newSecretCode.push(colors[randomIndex]);
    }
    setSecretCode(newSecretCode);
    dispatch({ type: "SET_SECRET_CODE", payload: newSecretCode });
  }, []);

  return (
    <div>
      <div className="secretCode-container">
        <div className="secretCode">
          {secretCode.map((color, index) => (
            <Circle key={`secret-${index}`} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecretCode;
