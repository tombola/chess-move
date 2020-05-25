import React from "react";
import { COLUMNS, GAME_PIECE_NOTATION, ROWS } from "../../utilities/constants";

class Move extends React.Component {
  columnRef = React.createRef();
  rowRef = React.createRef();
  pieceRef = React.createRef();

  submitMove = (event) => {
    event.preventDefault();
    const move = {
      column: this.columnRef.current.value,
      row: this.rowRef.current.value,
      piece: this.pieceRef.current.value,
    };
    // TODO: Validate the piece placement.
    this.props.buildNextMove(move);
  };

  render() {
    const col_options = COLUMNS.map((c) => (
      <option value={c} key={`c${c}`}>
        {c}
      </option>
    ));
    const row_options = ROWS.map((r) => (
      <option value={r} key={`r${r}`}>
        {r}
      </option>
    ));
    const piece_options = Object.keys(GAME_PIECE_NOTATION).map((p) => (
      <option value={p} key={p}>
        {GAME_PIECE_NOTATION[p]}
      </option>
    ));
    const description = this.props.moveDescription ? (
      <h2>{this.props.moveDescription}</h2>
    ) : (
      ""
    );
    return (
      <form onSubmit={this.submitMove}>
        {description}
        <select name="column" ref={this.columnRef}>
          {col_options}
        </select>
        <select name="row" ref={this.rowRef}>
          {row_options}
        </select>
        <select name="piece" ref={this.pieceRef}>
          {piece_options}
        </select>
        <button type="submit">
          {this.props.buttonText ? this.props.buttonText : "✓"}
        </button>
      </form>
    );
  }
}

export default Move;
