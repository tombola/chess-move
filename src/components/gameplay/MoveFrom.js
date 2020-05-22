import React from "react";
import { withRouter } from "react-router-dom";
import ChessPiece from "./ChessPiece";

class MoveFrom extends React.Component {
  gotoMoveTo = () => {
    const { history } = this.props;
    if (history) {
      history.push(this.props.postSubmitRoute);
    }
  };
  render() {
    return (
      <PiecePlacement
        sendPlacement={this.props.setNextMoveFrom}
        moveDescription="From"
        submitAction={this.gotoMoveTo}
      />
    );
  }
}

export default withRouter(MoveFrom);
