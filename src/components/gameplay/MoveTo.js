import React from "react";
import { withRouter } from "react-router-dom";
import PiecePlacement from "./PiecePlacement";

class MoveTo extends React.Component {
  gotoShowMove = () => {
    const { history } = this.props;
    if (history) {
      history.push(this.props.postSubmitRoute);
    }
  };

  render() {
    console.log(this.props.gameId);
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
