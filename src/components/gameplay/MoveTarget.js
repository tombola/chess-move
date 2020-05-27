import React from "react";
import { COL_OPTIONS, ROW_OPTIONS } from "../../utilities/constants";
import { gameActions } from "./index";
import { dispatchType } from "./types";

function MoveTarget(props) {
  const columnRef = React.useRef();
  const rowRef = React.useRef();

  function submitMove(event) {
    event.preventDefault();
    const position = {
      column: columnRef.current.value,
      row: rowRef.current.value,
    };
    props.dispatchMove({ type: gameActions.moveTo, position: position });
  }

  return (
    <React.Fragment>
      <form onSubmit={submitMove}>
        <h2>To</h2>
        <select name="column" ref={columnRef}>
          {COL_OPTIONS}
        </select>
        <select name="row" ref={rowRef}>
          {ROW_OPTIONS}
        </select>
        <button type="submit">✓</button>
      </form>
    </React.Fragment>
  );
}

MoveTarget.propTypes = {
  dispatchMove: dispatchType,
};

export default MoveTarget;
