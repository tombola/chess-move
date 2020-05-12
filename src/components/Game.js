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
  render() {
    return (
      <Switch>
        <Route
          path="/game/:gameId/nextmove"
          render={(props) => <MakeMove playMove={this.playMove} />}
        />
        <Route path="/game/:gameId/currentmove" component={MoveDescription} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Game;
