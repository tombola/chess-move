import React from "react";
import { COLUMNS, GAME_PIECE_NOTATION, ROWS } from "../../utilities/constants";

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

function Move(props) {
  const columnRef = React.useRef();
  const rowRef = React.useRef();
  const pieceRef = React.useRef();

  function submitMove(event) {
    event.preventDefault();
    const position = {
      column: columnRef.current.value,
      row: rowRef.current.value,
      // piece: pieceRef.current.value,
    };
    props.dispatchMove({ type: props.dispatchActionType, move: position });
  }

  const description = props.moveDescription ? (
    <h2>{props.moveDescription}</h2>
  ) : (
    ""
  );

  return (
    <form onSubmit={submitMove}>
      {description}
      <select name="column" ref={columnRef}>
        {col_options}
      </select>
      <select name="row" ref={rowRef}>
        {row_options}
      </select>
      <select name="piece" ref={pieceRef}>
        {piece_options}
      </select>
      <button type="submit">{props.buttonText ? props.buttonText : "✓"}</button>
    </form>
  );
}

export default Move;
