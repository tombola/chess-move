import React, { useState } from "react";
import { GAME_INITIAL_STATE } from "../../utilities/constants";
import { getCurrentPlayer } from "../../utilities/helpers";
import MoveFrom from "./MoveFrom";
import MoveTo from "./MoveTo";

function Game(props) {
  const [gameId, setGameId] = useState(props.match.gameId);
  const [gameState, setGameState] = useState(GAME_INITIAL_STATE);
  const [moveHistory, setMoveHistory] = useState([]);
  const [nextMove, setNextMove] = useState(undefined);
  const [playSide] = useState(localStorage.getItem("currentGameSide"));

  function buildNextMove(move) {
    if ("from" in move) {
      setNextMove(move);
    } else if ("to" in move) {
      setNextMove({ ...nextMove, ...move });
    }
  }

  function getLastMove() {
    return "C3";
  }

  function getLastMovePiece() {
    return "♘";
  }

  function getPrecedingMove() {
    return "A2";
  }

  return "Play Game";

  if (getCurrentPlayer(moveHistory) === playSide) {
    if (nextMove === undefined) {
      return <MoveFrom></MoveFrom>;
    } else if ("from" in nextMove) {
      return <MoveTo></MoveTo>;
    }
  }
}

export default Game;
