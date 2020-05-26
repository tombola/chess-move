import React from "react";
import { getSquareColour } from "../../utilities/helpers";
import ChessSquare from "./ChessSquare";
import FromSquare from "./FromSquare";
import ToSquare from "./ToSquare";

function MoveDescription(props) {
  const toSquareColour = getSquareColour(props.move.to);

  console.log(toSquareColour);
  return (
    <React.Fragment>
      <FromSquare position={props.move.from} />
      <ChessSquare
        chessPiece={props.move.piece}
        squareColour={toSquareColour}
      />
      <ToSquare position={props.move.to} />
      {/* <NextMoveButton /> */}
    </React.Fragment>
  );
}

export default MoveDescription;
