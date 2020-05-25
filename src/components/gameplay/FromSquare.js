import React from "react";

function FromSquare({ ...position }) {
  return <p className="move-description--from">{position} →</p>;
}

export default FromSquare;
