import React from "react";
import { useHistory } from "react-router-dom";
import shortid from "shortid";

function NewGame(props) {
  const history = useHistory();
  const submitNewGame = (side) => {
    const newGameId = shortid.generate();

    localStorage.setItem("currentGameId", newGameId);
    localStorage.setItem("currentGameSide", side);
    history.push(`/game/${newGameId}`);
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

export default NewGame;
