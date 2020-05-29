import React from "react";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import ChessSquare from "../gameplay/ChessSquare";

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
        role="button"
        aria-label="white"
        onClick={() => submitNewGame("white")}
      >
        <ChessSquare
          chessPiece={{ piece: "Queen", side: "white" }}
          squareColour={"black"}
        />
      </div>
      <div
        role="button"
        aria-label="black"
        onClick={() => submitNewGame("black")}
      >
        <ChessSquare
          chessPiece={{ piece: "Queen", side: "black" }}
          squareColour={"white"}
        />
      </div>
    </React.Fragment>
  );
}

export default NewGame;
