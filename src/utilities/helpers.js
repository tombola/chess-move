import { COLUMNS, ROWS } from "./constants";

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
  const positionLetter = COLUMNS.indexOf(letter);
  if (positionLetter > -1) {
    return COLUMNS.indexOf(letter) + 1;
  }
  return null;
}

// // Position string with side (W/B) to position alone
// if (typeof position === "string") {
//   return position.length === 2 ? position : position.substring(0, 2);
// }

export function positionToString(position) {
  console.log(position);
  console.log(typeof position);
  if (typeof position === "object") {
    console.log(position);
    return position.column + position.row;
  }
  return typeof position === "string" ? position : null;
}

export function toggleSide(playSide) {
  return playSide === "white" ? "black" : "white";
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

function validSquare(square) {
  console.log(square);
  let rowNumber = getNumber(square.row);
  return (
    "column" in square &&
    "row" in square &&
    square.column in COLUMNS &&
    rowNumber in ROWS
  );
}

function validMoveOrigin(square) {
  // TODO: check piece is player's side
  // TODO: check against game state
  return validSquare(square);
}

function validMoveTarget(square) {
  // TODO: check against game state
  return validSquare(square);
}

export function isValidMove(move) {
  console.log(move);

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
    return validSquare(move.from);
  }
  return false;
}
