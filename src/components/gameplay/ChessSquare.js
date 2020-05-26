import React from "react";
import { ReactComponent as ChessPieces } from "../../images/chess_pieces.svg";

function ChessSquare(props) {
  // See https://codepen.io/tombolatron/pen/gOaqVaJ
  // TODO: ChessPieces svg should be added to DOM by higher component
  // so that multiple pieces can be displayed at one time.

  const pieceColour = props.chessPiece.side.toLowerCase();
  const pieceId = props.chessPiece.piece.toLowerCase();
  const squareColour = props.squareColour.toLowerCase();

  return (
    <div className={`chess-square chess-square--${squareColour}`}>
      <ChessPieces />
      <svg className={`chess-piece chess-piece--${pieceColour}`}>
        <use xlinkHref={`#${pieceId}`} />
      </svg>
    </div>
  );
}

export default ChessSquare;
