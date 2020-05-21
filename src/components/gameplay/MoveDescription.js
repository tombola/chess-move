import React from "react";
import ChessPieceIcon from "./ChessPieceIcon";
import FromSquare from "./FromSquare";
import NextMoveButton from "./NextMoveButton";
import ToSquare from "./ToSquare";

function MoveDescription(props) {
  if (props.lastMove === undefined) {
    return <h2>Awaiting first move</h2>;
  }

  return (
    <React.Fragment>
      <FromSquare square={props.lastMove.from} />
      <ChessPieceIcon chessPiece={props.lastMove.piece} />
      <ToSquare square={props.lastMove.to} />
      <NextMoveButton />
    </React.Fragment>
  );
}

export default MoveDescription;
