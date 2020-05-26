import React from "react";
import {
  COL_OPTIONS,
  PIECE_OPTIONS,
  ROW_OPTIONS,
} from "../../utilities/constants";
import { gameActions } from "./index";

function MoveOrigin(props) {
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
    props.dispatchMove({ type: gameActions.moveFrom, position: position });
  }

  return (
    <form onSubmit={submitMove}>
      <h2>From</h2>
      <select name="column" ref={columnRef}>
        {COL_OPTIONS}
      </select>
      <select name="row" ref={rowRef}>
        {ROW_OPTIONS}
      </select>
      <select name="piece" ref={pieceRef}>
        {PIECE_OPTIONS}
      </select>
      <button type="submit">{props.buttonText ? props.buttonText : "✓"}</button>
    </form>
  );
}

export default MoveOrigin;
