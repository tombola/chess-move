import React, { useState } from "react";
import { GAME_INITIAL_STATE } from "../../utilities/constants";
import {
  getCurrentPlayer,
  isValidMove,
  isValidMovePartial,
} from "../../utilities/helpers";
import MoveDescription from "./MoveDescription";
import MoveFrom from "./MoveFrom";
import MoveTo from "./MoveTo";

function Game(props) {
  const [gameId, setGameId] = useState(props.match.gameId);
  const [gameState, setGameState] = useState(GAME_INITIAL_STATE);
  const [moveHistory, setMoveHistory] = useState([]);
  const [nextMove, setNextMove] = useState({ from: "", to: "", piece: "" });
  const [lastMove, setLastMove] = useState({ from: "", to: "", piece: "" });
  const [playSide, setPlaySide] = useState(
    localStorage.getItem("currentGameSide")
  );

  function buildNextMove(move) {
    if ("from" in move) {
      setNextMove(move);
    } else if ("to" in move) {
      setNextMove({ ...nextMove, ...move });
    }
  }

  if (getCurrentPlayer(moveHistory) === playSide) {
    if (!isValidMove(nextMove)) {
      if (isValidMovePartial(nextMove)) {
        return <MoveTo buildNextMove={buildNextMove} />;
      } else {
        return <MoveFrom buildNextMove={buildNextMove} />;
      }
    }
  }

  return <MoveDescription move={lastMove}></MoveDescription>;
}

export default Game;
