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

export function toggleSide(playSide) {
  return playSide === "white" ? "black" : "white";
}

function isOdd(num) {
  return num % 2;
}

export function getCurrentPlayer(moveHistory) {
  return isOdd(moveHistory.length) ? "black" : "white";
}

function validSquare(square) {
  let rowNumber = getNumber(square[1]);
  return (
    square.length === 2 && square[0] in ROWS && rowNumber && rowNumber <= 8
  );
}

function validMoveOrigin(square) {
  // TODO: check piece is player's side
  // TODO: check against game state
  return validSquare(square);
}

function validMoveDestination(square) {
  // TODO: check against game state
  return validSquare(square);
}

export function isValidMove(move) {
  // Empty move object
  if (Object.keys(move).length === 0) {
    return false;
  }
  // Is missing a property
  if (
    move.hasOwnProperty("from") &&
    move.hasOwnProperty("to") &&
    move.hasOwnProperty("piece")
  ) {
    // Has valid elements?
    return (
      validMoveOrigin(move.from) &&
      validMoveDestination(move.to) &&
      move.piece in GAME_PIECE_NOTATION
    );
  }
  return true;
}

export function isValidMovePartial(move) {
  // Empty move object
  if (Object.keys(move).length === 0) {
    return false;
  }
  // Is missing a property
  if (move.hasOwnProperty("from") && move.hasOwnProperty("piece")) {
    // Has valid elements?
    return validSquare(move.from) && move.piece in GAME_PIECE_NOTATION;
  }
  return true;
}
