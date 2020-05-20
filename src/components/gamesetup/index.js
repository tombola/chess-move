import React from "react";
import { Link } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { NEW_GAME } from "../../utilities/routes";

class Landing extends React.Component {
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
          <Link to={formatRoute(NEW_GAME, { gameId: currentGame })}>
            Continue current game
          </Link>
        </p>
      );
    }

    return (
      <React.Fragment>
        <h1>
          <Link to={formatRoute(NEW_GAME)}>New Game</Link>
        </h1>
        {continueLink}
      </React.Fragment>
    );
  }
}

export default Landing;
