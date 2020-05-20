import React, { useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { v4 as uuidv4 } from "uuid";
import { NEXT_MOVE_FROM } from "../../utilities/routes";

function NewGame(props) {
  const [gameId, setGameId] = useState(null);
  const [playSide, setPlaySide] = useState("white");
  const playSideRef = useRef(null);

  const initiateGame = (side) => {
    setGameId(uuidv4());
    setPlaySide(side || "white");
  };

  const submitNewGame = (event) => {
    event.preventDefault();
    const playSide = playSideRef.current.value;
    const history = props.history;
    const gameId = initiateGame(playSide);
    history.push(formatRoute(NEXT_MOVE_FROM, { gameId: props.gameId }));
  };

  return (
    <form onSubmit={submitNewGame}>
      <p>Which side would you like to play?</p>
      <select name="play-side" id="play-side" ref={playSideRef}>
        <option value="white">White</option>
        <option value="black">Black</option>
      </select>
      <input type="submit" value="Start" />
    </form>
  );
}

export default withRouter(NewGame);
