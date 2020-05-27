import React from "react";
import { useHistory } from "react-router-dom";

function NextMoveButton(props) {
  function nextMove() {
    const history = useHistory();
    if (history) {
      history.push("next/from");
    }
  }
  return (
    <button className="next-move" onClick={nextMove}>
      Next Move
    </button>
  );
}

export default NextMoveButton;
