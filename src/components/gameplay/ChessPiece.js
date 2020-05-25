import React from "react";
import { ReactComponent as ChessPieces } from "../../images/chess_pieces.svg";

function ChessPiece(props) {
  // See https://codepen.io/tombolatron/pen/gOaqVaJ
  // TODO: ChessPieces svg should be added to DOM by higher component
  // so that multiple pieces can be displayed at one time.
  return (
    <div className="chess-square">
      <ChessPieces />
      <svg>
        <use xlinkHref={`#${props.chessPiece}`} />
      </svg>
    </div>
  );
}

export default ChessPiece;
