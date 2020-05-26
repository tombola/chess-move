import React from "react";
import { positionToString } from "../../utilities/helpers";

function FromSquare(props) {
  return (
    <p className="move-description--from">
      {positionToString(props.position)} →
    </p>
  );
}

export default FromSquare;
