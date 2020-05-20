import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewGame from "./NewGame";

function GameSetup(props) {
  const [currentGame] = useState(localStorage.getItem("currentGame"));
  const [startNew, setStartNew] = useState(false);
  console.log(currentGame);
  console.log(startNew);
  if (currentGame && !startNew) {
    return (
      <React.Fragment>
        <h1 onClick={() => setStartNew("true")}>New Game</h1>
        <p>
          <Link to={`/game/$currentGame`}>Continue current game</Link>
        </p>
      </React.Fragment>
    );
  } else {
    return <NewGame />;
  }
}

export default GameSetup;
