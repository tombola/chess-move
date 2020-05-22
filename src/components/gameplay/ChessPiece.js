import React from "react";
import { ReactComponent as ChessPieceIcon } from "../../images/chess_pieces/knight.svg";

class ChessPiece extends React.Component {
  render() {
    return (
      <div className="chess-square">
        {/* <span className="chess-piece">{this.props.chessPiece}</span> */}
        <ChessPieceIcon />
      </div>
    );
  }
}

export default ChessPiece;
