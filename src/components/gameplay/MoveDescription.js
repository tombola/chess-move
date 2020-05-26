import React from "react";
import ChessSquare from "./ChessSquare";
import FromSquare from "./FromSquare";
import ToSquare from "./ToSquare";

function MoveDescription(props) {
  return (
    <React.Fragment>
      <FromSquare position={props.move.from} />
      <ChessSquare chessPiece={props.move.piece} />
      <ToSquare position={props.move.to} />
      {/* <NextMoveButton /> */}
    </React.Fragment>
  );
}

export default MoveDescription;
