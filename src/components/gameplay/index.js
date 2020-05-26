import React, { useReducer } from "react";
import { GAME_START_BOARD } from "../../utilities/constants";
import {
  getPieceAtPosition,
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
      const partialMove = {
        ...state.nextMove,
        from: action.position,
        piece: getPieceAtPosition(state.gameState, action.position),
      };
      if (isValidMovePartial(partialMove)) {
        return { ...state, nextMove: partialMove };
      }
      break;
    case gameActions.moveTo:
      const thisMove = { ...state.nextMove, to: action.position };
      if (isValidMove(thisMove)) {
        const moveHistory = [...state.moveHistory, thisMove];
        return { ...state, moveHistory, nextMove: null };
      }
      console.log("invalid");
      break;
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
  } else {
    if (state.moveHistory.length === 0) {
      return <h2>Awaiting first move</h2>;
    }
    return <MoveDescription move={state.moveHistory.pop()}></MoveDescription>;
  }
}

export default Game;
