import React from "react";
import { Route, Switch } from "react-router-dom";
import MoveDescription from "./MoveDescription";
import MoveFrom from "./MoveFrom";
import MoveTo from "./MoveTo";
import NotFound from "./NotFound";
import { GAME_INITIAL_STATE } from "../utilities/constants";
import * as routes from '../utilities/routes';
import { formatRoute } from 'react-router-named-routes';

class Game extends React.Component {
  state = {
    moveHistory: [],
    gameState: GAME_INITIAL_STATE,
    nextMove: {},
  };
  setNextMoveFrom = (move) => {
    const nextMove = {...this.state.nextMove}
    // TODO: check if it is our turn
    nextMove.from = move
    // Unset destination value as it would have to be re-validated
    // against the from position.
    nextMove.to = {}
    console.log("Set the from position for next move");
    this.setState({nextMove: nextMove})
    console.log(this.state.nextMove)
  };
  setNextMoveTo = (move) => {
    console.log("Set the destination for next move");
    console.log(move)
  };
  getLastMove = () => {
    return "C3"
  };
  getLastMovePiece = () => {
    return "♘"
  }
  getPrecedingMove = () => {
    return "A2"
  };
  render() {
    return (
      <Switch>
        <Route
          path={formatRoute(routes.NEXT_MOVE_FROM, {gameId:"joevtom"})}
          render={(props) => <MoveFrom setNextMoveFrom={this.setNextMoveFrom} />}
        />
        <Route
          path={formatRoute(routes.NEXT_MOVE_TO, {gameId:"joevtom"})}
          render={(props) => <MoveTo setNextMoveTo={this.setNextMoveTo} />}
        />
        <Route
          path={formatRoute(routes.LAST_MOVE, {gameId:"joevtom"})}
          render={(props) => <MoveDescription
              getLastMove={this.getLastMove}
              getPrecedingMove={this.getPrecedingMove}
              getLastMovePiece={this.getLastMovePiece}
          />}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Game;
