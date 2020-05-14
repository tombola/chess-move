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
import NotFound from "./NotFound";

class Game extends React.Component {
  state = {
    moveHistory: [],
    gameState: GAME_INITIAL_STATE,
    nextMove: {},
  };
  componentDidMount() {
    syncGameWithStorage(this);
  }
  componentWillUnmount() {
    disconnectGameFromStorage(this);
  }
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
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Game;
