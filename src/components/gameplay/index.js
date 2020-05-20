import React from "react";
import { Route, Switch } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { v4 as uuidv4 } from "uuid";
import { GAME_INITIAL_STATE } from "../../utilities/constants";
import * as routes from "../../utilities/routes";
import {
  disconnectGameFromStorage,
  restoreGameFromLocalStorage,
  syncGameWithStorage,
  updateGameLocalStorage,
} from "../../utilities/storage";
import Landing from "../gamesetup";
import NewGame from "../gamesetup/NewGame";
import NotFound from "../NotFound";
import MoveDescription from "./MoveDescription";
import MoveFrom from "./MoveFrom";
import MoveTo from "./MoveTo";

class Game extends React.Component {
  state = {
    gameId: "",
    moveHistory: [],
    gameState: GAME_INITIAL_STATE,
    nextMove: {},
    playSide: "",
  };
  componentDidMount() {
    restoreGameFromLocalStorage(this);
    syncGameWithStorage(this);
  }
  componentDidUpdate() {
    updateGameLocalStorage(this);
  }
  componentWillUnmount() {
    disconnectGameFromStorage(this);
  }
  startNewGame = (side) => {
    const gameId = uuidv4();
    const playSide = side || "white";
    console.log(`start new game playing as ${playSide} with id ${gameId}`);
    this.setState({ gameId, playSide });
    return gameId;
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
          path={formatRoute(routes.NEXT_MOVE_FROM)}
          render={(props) => (
            <MoveFrom
              gameId={this.state.gameId}
              setNextMoveFrom={this.setNextMoveFrom}
              postSubmitRoute={formatRoute(routes.NEXT_MOVE_TO, {
                gameId: this.props.gameId,
              })}
            />
          )}
        />
        <Route
          path={formatRoute(routes.NEXT_MOVE_TO)}
          render={(props) => (
            <MoveTo
              gameId={this.state.gameId}
              setNextMoveTo={this.setNextMoveTo}
              postSubmitRoute={formatRoute(routes.LAST_MOVE, {
                gameId: this.props.gameId,
              })}
            />
          )}
        />
        <Route
          path={formatRoute(routes.LAST_MOVE)}
          render={(props) => (
            <MoveDescription
              gameId={this.state.gameId}
              getLastMove={this.getLastMove}
              getPrecedingMove={this.getPrecedingMove}
              getLastMovePiece={this.getLastMovePiece}
              nextTurnRoute={formatRoute(routes.NEXT_MOVE_FROM, {
                gameId: this.props.gameId,
              })}
            />
          )}
        />
        <Route
          path={formatRoute(routes.NEW_GAME)}
          render={(props) => <NewGame startNewGame={this.startNewGame} />}
        />
        <Route path="/" render={(props) => <Landing />} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Game;
