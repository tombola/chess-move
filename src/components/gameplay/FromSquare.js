import React from "react";
import { positionToString } from "../../utilities/helpers";
import { positionType } from "./types";

function FromSquare(props) {
  return (
    <p className="move-description--from">
      {positionToString(props.position)} →
    </p>
  );
}

FromSquare.propTypes = {
  position: positionType.isRequired,
};

export default FromSquare;
