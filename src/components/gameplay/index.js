import React, { useReducer } from "react";
import { GAME_START_BOARD } from "../../utilities/constants";
import {
  isCurrentPlayerMove,
  isValidMove,
  isValidMovePartial,
} from "../../utilities/helpers";
import Move from "./Move";
import MoveDescription from "./MoveDescription";

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
      if (isValidMovePartial(action.move)) {
        console.log("valid move origin");
      }
      console.log(`Move from square ${action.move.column}${action.move.row}`);
      console.log(action.move);
      return { ...state, nextMove: { from: action.move } };
    case gameActions.moveTo:
      if (isValidMove(action.move)) {
        console.log("valid full move");
      }
      console.log(`Move to square ${action.move.column}${action.move.row}`);
      console.log(action.move);
      return state;
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
      return (
        <Move
          dispatchMove={dispatch}
          dispatchActionType={gameActions.moveTo}
          moveDescription="To"
          buttonText="Play ✓"
        />
      );
    }
    return (
      <Move
        dispatchMove={dispatch}
        dispatchActionType={gameActions.moveFrom}
        moveDescription="From"
      />
    );
  }

  return <MoveDescription move={state.moveHistory.pop()}></MoveDescription>;
}

export default Game;
