import React, { useReducer } from "react";
import { GAME_START_BOARD } from "../../utilities/constants";
import {
  isCurrentPlayerMove,
  isValidMove,
  isValidMovePartial,
} from "../../utilities/helpers";
import MoveDescription from "./MoveDescription";
import MoveOrigin from "./MoveOrigin";
import MoveTarget from "./MoveTarget";

export const gameActions = {
  moveFrom: "MOVE_FROM",
  moveTo: "MOVE_TO",
};

const GAME_INITIAL_STATE = {
  gameId: null,
  gameState: GAME_START_BOARD,
  moveHistory: [],
  nextMove: null,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case gameActions.moveFrom:
      if (isValidMovePartial(action.position)) {
        console.log("valid move origin");
      }
      console.log(
        `Move from square ${action.position.column}${action.position.row}`
      );
      console.log(action.position);
      return { ...state, nextMove: { from: action.position } };
    case gameActions.moveTo:
      if (isValidMove(action.position)) {
        console.log("valid full move");
      }
      console.log(
        `Move to square ${action.position.column}${action.position.row}`
      );
      const thisMove = { ...state.nextMove, to: action.position };
      const moveHistory = [...state.moveHistory, thisMove];
      return { ...state, moveHistory, nextMove: null };
    default:
      return state;
  }
};

function Game(props) {
  const [state, dispatch] = useReducer(gameReducer, GAME_INITIAL_STATE);
  const playSide = localStorage.getItem("currentGameSide");
  console.log(`(render) I am playing ${playSide}`);

  if (isCurrentPlayerMove(state, playSide)) {
    if (state.nextMove && "from" in state.nextMove) {
      return <MoveTarget dispatchMove={dispatch} />;
    }
    return <MoveOrigin dispatchMove={dispatch} />;
  }

  return <MoveDescription move={state.moveHistory.pop()}></MoveDescription>;
}

export default Game;
