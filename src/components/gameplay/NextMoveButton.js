import React from "react";
import { withRouter } from "react-router-dom";

function NextMoveButton(props) {
  function nextMove() {
    const { history } = this.props;
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

export default withRouter(NextMoveButton);
