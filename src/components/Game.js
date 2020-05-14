import React from "react";
import { Route, Switch } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { GAME_INITIAL_STATE } from "../utilities/constants";
import * as routes from "../utilities/routes";
import {
  disconnectGameFromStorage,
  syncGameWithStorage,
} from "../utilities/storage";
import MoveDescription from "./MoveDescription";
import MoveFrom from "./MoveFrom";
import MoveTo from "./MoveTo";
import NewGame from "./NewGame";
import NotFound from "./NotFound";

class Game extends React.Component {
  state = {
    moveHistory: [],
    gameState: GAME_INITIAL_STATE,
    nextMove: {},
    currentGame: "",
  };
  componentDidMount() {
    // If browser is refreshed, restore game from local storage
    const localCurrentGame = localStorage.getItem("currentGame");
    if (!this.state.currentGame && localCurrentGame) {
      this.setState({ currentGame: JSON.parse(localCurrentGame) });
    }
    const localNextMove = localStorage.getItem("nextMove");
    if (Object.keys(this.state.nextMove).length === 0 && localNextMove) {
      console.log("set next move");
      this.setState({ nextMove: JSON.parse(localNextMove) });
    }
    syncGameWithStorage(this);
  }
  componentDidUpdate() {
    localStorage.setItem("nextMove", JSON.stringify(this.state.nextMove));
    localStorage.setItem("currentGame", JSON.stringify(this.state.currentGame));
  }
  componentWillUnmount() {
    disconnectGameFromStorage(this);
  }
  startNewGame = (gameId) => {
    console.log(`Start a new game with id ${gameId}`);
  };
  setNextMoveFrom = (move) => {
    const nextMove = { ...this.state.nextMove };
    // TODO: check if it is our turn
    nextMove.from = move;
    nextMove.to = {};
    this.setState({ nextMove });
  };
  setNextMoveTo = (move) => {
    const nextMove = { ...this.state.nextMove };
    // TODO: check if it is our turn
    nextMove.to = move;
    this.setState({ nextMove });
  };
  getLastMove = () => {
    return "C3";
  };
  getLastMovePiece = () => {
    return "♘";
  };
  getPrecedingMove = () => {
    return "A2";
  };
  render() {
    return (
      <Switch>
        <Route
          path={formatRoute(routes.NEXT_MOVE_FROM, { gameId: "joevtom" })}
          render={(props) => (
            <MoveFrom setNextMoveFrom={this.setNextMoveFrom} />
          )}
        />
        <Route
          path={formatRoute(routes.NEXT_MOVE_TO, { gameId: "joevtom" })}
          render={(props) => <MoveTo setNextMoveTo={this.setNextMoveTo} />}
        />
        <Route
          path={formatRoute(routes.LAST_MOVE, { gameId: "joevtom" })}
          render={(props) => (
            <MoveDescription
              getLastMove={this.getLastMove}
              getPrecedingMove={this.getPrecedingMove}
              getLastMovePiece={this.getLastMovePiece}
            />
          )}
        />
        <Route
          path="/"
          render={(props) => <NewGame startNewGame={this.startNewGame} />}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Game;
