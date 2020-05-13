import React from "react";
import { withRouter } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import * as routes from "../utilities/routes";
import PiecePlacement from "./PiecePlacement";

class MoveFrom extends React.Component {
  gotoMoveTo = () => {
    console.log("send me elsewehere");
    const { history } = this.props;
    if (history) {
      history.push(formatRoute(routes.NEXT_MOVE_TO, { gameId: "joevtom" }));
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
