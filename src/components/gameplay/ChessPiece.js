import React from "react";
import { ReactComponent as ChessPieces } from "../../images/chess_pieces.svg";

class ChessPiece extends React.Component {
  // See https://codepen.io/tombolatron/pen/gOaqVaJ
  // TODO: ChessPieces svg should be added to DOM by higher component
  // so that multiple pieces can be displayed at one time.
  render() {
    return (
      <div className="chess-square">
        <ChessPieces />
        <svg>
          <use xlinkHref={`#${this.props.chessPiece}`} />
        </svg>
      </div>
    );
  }
}

export default ChessPiece;
