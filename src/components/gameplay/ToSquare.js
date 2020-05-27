import React from "react";
import { positionToString } from "../../utilities/helpers";
import { positionType } from "./types";

function ToSquare(props) {
  console.log(props.position);
  return (
    <p className="move-description--to">{positionToString(props.position)}</p>
  );
}

ToSquare.propTypes = {
  position: positionType.isRequired,
};

export default ToSquare;
