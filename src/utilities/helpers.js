import { COLUMNS, GAME_PIECE_NOTATION, ROWS } from "./constants";

function _getNumber(numericString) {
  if (typeof numericString === "number") {
    return numericString;
  }
  return !isNaN(numericString) ? parseInt(numericString) : null;
}

export function getRow(position) {
  return position !== undefined && position.length === 2
    ? _getNumber(position[1])
    : null;
}

export function getColumn(position) {
  return position !== undefined && position.length === 2 ? position[0] : null;
}

export function getPosition(row, column) {
  const rowNumber = _getNumber(row);
  if (rowNumber && rowNumber <= 8 && COLUMNS.includes(column)) {
    return { row: rowNumber, column: column };
  }
}

function _columnMatrixKey(columnLetter) {
  return COLUMNS.indexOf(columnLetter);
}

export function getMatrixKeys(position) {
  // Matrix coordinates with origin as position A1
  // These are keys for array, NOT row/column so starting at zero
  return [_getNumber(position.row - 1), _columnMatrixKey(position.column)];
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

export function positionFromString(position) {
  if (position.length === 2) {
    return {
      column: position.substring(0, 1),
      row: _getNumber(position.substring(1)),
    };
  }
}

export function toggleSide(playSide) {
  return playSide === "white" ? "black" : "white";
}

export function getPieceAtPosition(gameState, position) {
  const square =
    gameState[_getNumber(position.row) - 1][_columnMatrixKey(position.column)];
  if (square !== "") {
    const piece = GAME_PIECE_NOTATION[square.substring(1)];
    const side = square.substring(0, 1) === "W" ? "white" : "black";
    return { piece, side };
  }
}

export function getSquareColour(position) {
  // See constants GAME_START_BOARD for matrix
  const matrixKeys = getMatrixKeys(position);
  if (_isOdd(matrixKeys[0])) {
    return _isOdd(matrixKeys[1]) ? "white" : "black";
  } else {
    return _isOdd(matrixKeys[1]) ? "black" : "white";
  }
}

function _isOdd(num) {
  return num % 2 === 1;
}

export function getCurrentPlayer(moveHistory) {
  return _isOdd(moveHistory.length) ? "black" : "white";
}

export function isCurrentPlayerMove(moveHistory, playSide) {
  return playSide && getCurrentPlayer(moveHistory) === playSide;
}

function _validPosition(position) {
  let rowNumber = _getNumber(position.row);
  return (
    "column" in position &&
    "row" in position &&
    COLUMNS.includes(position.column) &&
    ROWS.includes(rowNumber)
  );
}

function _validMoveOrigin(square) {
  // TODO: check piece is player's side
  // TODO: check against game state
  return _validPosition(square);
}

function validMoveTarget(square) {
  // TODO: check against game state
  return _validPosition(square);
}

export function isValidMove(move) {
  // Empty move object
  if (move === null || Object.keys(move).length === 0) {
    return false;
  }
  // Has to and from elements
  if (move.hasOwnProperty("from") && move.hasOwnProperty("to")) {
    // Has valid origin/target
    return _validMoveOrigin(move.from) && validMoveTarget(move.to);
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
    return _validPosition(move.from);
  }
  return false;
}
