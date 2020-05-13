import React from "react";
import { withRouter } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import * as routes from "../utilities/routes";
import PiecePlacement from "./PiecePlacement";

class MoveTo extends React.Component {
  gotoShowMove = () => {
    const { history } = this.props;
    if (history) {
      history.push(formatRoute(routes.LAST_MOVE, { gameId: "joevtom" }));
    }
  };

  render() {
    return (
      <PiecePlacement
        sendPlacement={this.props.setNextMoveTo}
        submitAction={this.gotoShowMove}
        moveDescription="To"
        buttonText="Play ✓"
      />
    );
  }
}

export default withRouter(MoveTo);
