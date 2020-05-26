import { COLUMNS, GAME_PIECE_NOTATION, ROWS } from "./constants";

function getNumber(numericString) {
  return !isNaN(numericString) ? parseInt(numericString) : null;
}

export function getRow(position) {
  return position !== undefined && position.length === 2
    ? getNumber(position[1])
    : null;
}

export function getColumn(position) {
  return position !== undefined && position.length === 2 ? position[0] : null;
}

function columnMatrixKey(columnLetter) {
  return COLUMNS.indexOf(columnLetter);
}

export function getPosition(row, column) {
  if (!isNaN(row) && row <= 8 && COLUMNS.includes(column)) {
    return { row: row, col: column };
  }
}

export function getCoordinates(position) {
  if (position.length === 2) {
    return { x: positionLetterToNumber(position[0]), y: position[1] };
  }
}

export function positionLetterToNumber(letter) {
  const key = columnMatrixKey(letter);
  if (key > -1) {
    return key + 1;
  }
  return null;
}

// // Position string with side (W/B) to position alone
// if (typeof position === "string") {
//   return position.length === 2 ? position : position.substring(0, 2);
// }

export function positionToString(position) {
  if (typeof position === "object") {
    return position.column + position.row;
  }
  return typeof position === "string" ? position : null;
}

export function toggleSide(playSide) {
  return playSide === "white" ? "black" : "white";
}

export function getPieceAtPosition(gameState, position) {
  const square =
    gameState[getNumber(position.row) - 1][columnMatrixKey(position.column)];
  if (square !== "") {
    const piece = GAME_PIECE_NOTATION[square.substring(1)];
    const side = square.substring(0, 1) === "W" ? "white" : "black";
    return { piece, side };
  }
}

function isOdd(num) {
  return num % 2;
}

export function getCurrentPlayer(moveHistory) {
  return isOdd(moveHistory.length) ? "black" : "white";
}

export function isCurrentPlayerMove(state, playSide) {
  return playSide && getCurrentPlayer(state.moveHistory) === playSide;
}

function validPosition(position) {
  let rowNumber = getNumber(position.row);
  return (
    "column" in position &&
    "row" in position &&
    COLUMNS.includes(position.column) &&
    ROWS.includes(rowNumber)
  );
}

function validMoveOrigin(square) {
  // TODO: check piece is player's side
  // TODO: check against game state
  return validPosition(square);
}

function validMoveTarget(square) {
  // TODO: check against game state
  return validPosition(square);
}

export function isValidMove(move) {
  // Empty move object
  if (move === null || Object.keys(move).length === 0) {
    return false;
  }
  // Has to and from elements
  if (move.hasOwnProperty("from") && move.hasOwnProperty("to")) {
    // Has valid origin/target
    return validMoveOrigin(move.from) && validMoveTarget(move.to);
  }
  return false;
}

export function isValidMovePartial(move) {
  // Empty move object
  if (move === null || Object.keys(move).length === 0) {
    return false;
  }
  // Is missing a property
  if (move.hasOwnProperty("from")) {
    // Has valid elements?
    return validPosition(move.from);
  }
  return false;
}
