import React from 'react';
import Router from './Router';
import { GAME_INITIAL_STATE } from "../utilities/constants";

class Game extends React.Component {
  state = {
    moves: [],
    gameState: GAME_INITIAL_STATE,
  };
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default Game;
