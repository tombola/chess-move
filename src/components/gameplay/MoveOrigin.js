import React from "react";
import {
  getColumnOptions,
  getPieceOptions,
  getRowOptions,
} from "../../utilities/helpers";
import { gameActions } from "./index";
import { dispatchType } from "./types";

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
      <label htmlFor="column">Column</label>
      <select name="column" id="column" ref={columnRef}>
        {getColumnOptions()}
      </select>
      <label htmlFor="row">Row</label>
      <select name="row" id="row" ref={rowRef}>
        {getRowOptions()}
      </select>
      <label htmlFor="piece">Piece</label>
      <select name="piece" id="piece" ref={pieceRef}>
        {getPieceOptions()}
      </select>
      <button type="submit">Next</button>
    </form>
  );
}

MoveOrigin.propTypes = {
  dispatchMove: dispatchType,
};

export default MoveOrigin;
