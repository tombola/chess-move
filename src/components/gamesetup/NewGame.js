import React from "react";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function NewGame(props) {
  const submitNewGame = (side) => {
    const newGameId = uuidv4();

    localStorage.setItem("currentGame", newGameId);
    localStorage.setItem("currentGameSide", side);
    props.history.push(`/game/${newGameId}`);
  };

  return (
    <React.Fragment>
      <p>Which side would you like to play?</p>
      <div
        className="chess-piece chess-piece--black"
        onClick={() => submitNewGame("white")}
      >
        ♚
      </div>
      <div
        className="chess-piece chess-piece--white"
        onClick={() => submitNewGame("black")}
      >
        ♚
      </div>
    </React.Fragment>
  );
}

export default withRouter(NewGame);
