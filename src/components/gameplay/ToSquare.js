import React from "react";

function ToSquare({ ...position }) {
  return <p className="move-description--to">{position}</p>;
}

export default ToSquare;
