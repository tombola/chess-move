import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewGame from "./NewGame";

function GameSetup(props) {
  const [startNew, setStartNew] = useState(false);
  const newGameLink = (
    <h1 role="button" onClick={() => setStartNew("true")}>
      New Game
    </h1>
  );
  let continueGameLink = null;

  if (startNew) {
    return <NewGame />;
  }

  if (localStorage.getItem("currentGameId")) {
    continueGameLink = (
      <p>
        <Link to={`/game/$currentGameId`}>Continue current game</Link>
      </p>
    );
  }

  return (
    <React.Fragment>
      {newGameLink}
      {continueGameLink}
    </React.Fragment>
  );
}

export default GameSetup;
