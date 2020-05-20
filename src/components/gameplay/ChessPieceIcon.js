import React from "react";

class ChessPieceIcon extends React.Component {
  render() {
    return (
      <div className="chess-square">
        <span className="chess-piece">{this.props.chessPiece}</span>
      </div>
    );
  }
}

export default ChessPieceIcon;
