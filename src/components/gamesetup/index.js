import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewGame from "./NewGame";

function GameSetup(props) {
  const [currentGameId] = useState(localStorage.getItem("currentGameId"));
  const [startNew, setStartNew] = useState(false);
  console.log(currentGameId);
  console.log(startNew);
  if (currentGameId && !startNew) {
    return (
      <React.Fragment>
        <h1 onClick={() => setStartNew("true")}>New Game</h1>
        <p>
          <Link to={`/game/$currentGameId`}>Continue current game</Link>
        </p>
      </React.Fragment>
    );
  } else {
    return <NewGame />;
  }
}

export default GameSetup;
