import React from "react";
import { Route, Switch } from "react-router-dom";
import MoveDescription from "./MoveDescription";
import MakeMove from "./MakeMove";
import NotFound from "./NotFound";
import { GAME_INITIAL_STATE } from "../utilities/constants";

class Game extends React.Component {
  state = {
    moves: [],
    gameState: GAME_INITIAL_STATE,
  };
  playMove = (move) => {
    console.log("Play move");
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
          path="/game/:gameId/nextmove"
          render={(props) => <MakeMove playMove={this.playMove} />}
        />
        <Route
          path="/game/:gameId/lastmove"
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
