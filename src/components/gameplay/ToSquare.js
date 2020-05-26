import React from "react";
import { positionToString } from "../../utilities/helpers";

function ToSquare(props) {
  console.log(props.position);
  return (
    <p className="move-description--to">{positionToString(props.position)}</p>
  );
}

export default ToSquare;
