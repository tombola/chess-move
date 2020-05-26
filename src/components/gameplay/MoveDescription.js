import React from "react";
import ChessPiece from "./ChessPiece";
import FromSquare from "./FromSquare";
import NextMoveButton from "./NextMoveButton";
import ToSquare from "./ToSquare";

function MoveDescription(props) {
  if (props.move === undefined) {
    return <h2>Awaiting first move</h2>;
  }
  console.log(props);

  return (
    <React.Fragment>
      <FromSquare position={props.move.from} />
      <ChessPiece chessPiece={props.move.piece} />
      <ToSquare position={props.move.to} />
      <NextMoveButton />
    </React.Fragment>
  );
}

export default MoveDescription;
