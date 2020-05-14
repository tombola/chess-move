import React from "react";
import { Link, withRouter } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { NEW_GAME } from "../utilities/routes";

class NewGame extends React.Component {
  gameIdRef = React.createRef();

  submitNewGame = (event) => {
    event.preventDefault();
    const gameId = this.gameIdRef.current.value;
    const history = this.props.history;
    // TODO: check if game ID is valid/available
    if (gameId) {
      this.props.startNewGame(gameId);
      history.push(formatRoute(NEW_GAME, { gameId: gameId }));
    }
  };

  render() {
    const currentGame = localStorage.getItem("currentGame");
    let continueLink = "";
    if (currentGame) {
      continueLink = (
        <p>
          <Link to={formatRoute(NEW_GAME, { gameId: "joevtom" })}>
            Continue game <em>joevtom</em>
          </Link>
        </p>
      );
    }

    return (
      <React.Fragment>
        <form onSubmit={this.submitNewGame}>
          <h1>New game</h1>
          <input type="text" name="gameId" ref={this.gameIdRef} />
          <input type="submit" value="Start" />
        </form>
        {continueLink}
      </React.Fragment>
    );
  }
}

export default withRouter(NewGame);
