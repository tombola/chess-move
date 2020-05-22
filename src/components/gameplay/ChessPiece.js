import React from "react";
import { ReactComponent as ChessPieces } from "../../images/chess_pieces.svg";

class ChessPiece extends React.Component {
  render() {
    return (
      <div className="chess-square">
        <ChessPieces />
        {this.props.chessPiece}
      </div>
    );
  }
}

export default ChessPiece;
