import React from "react";

function Rows() {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="rows-container">
      <div className="rows-toTry">
        {numbers.map((number) => (
          <div key={`toTry-${number}`} className="cell-toTry">
            {number}
          </div>
        ))}
      </div>

      <div className="rows-result">
        {numbers.map((number) => (
          <div key={`result-${number}`} className="cell-result">
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rows;
