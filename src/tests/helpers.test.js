const helpers = require("../utilities/helpers");
const constants = require("../utilities/constants");

// TODO: test non-exported functions like _isOdd and _getNumber

test("get row from position", () => {
  expect(helpers.getRow("A2")).toBe(2);
});

test("get column from position", () => {
  expect(helpers.getColumn("A2")).toBe("A");
});

test("combine row and column as position", () => {
  expect(helpers.getPosition(2, "A")).toStrictEqual({ row: 2, column: "A" });
  expect(helpers.getPosition("2", "A")).toStrictEqual({ row: 2, column: "A" });
});

test("get matrix (2D array) keys from position", () => {
  const position = {
    column: "A",
    row: 1,
  };
  expect(helpers.getMatrixKeys(position)).toStrictEqual([0, 7]);
});

test("get string for display from position", () => {
  const position = {
    column: "C",
    row: 3,
  };
  expect(helpers.positionToString(position)).toBe("C3");
});

test("get position object from string", () => {
  const position = {
    column: "C",
    row: 3,
  };
  expect(helpers.positionFromString("C3")).toStrictEqual(position);
});

test("toggle side", () => {
  expect(helpers.toggleSide("white")).toBe("black");
  expect(helpers.toggleSide("black")).toBe("white");
});

test("get piece at board position", () => {
  const whiteRookPosition = {
    column: "A",
    row: 1,
  };
  expect(
    helpers.getPieceAtPosition(constants.GAME_START_BOARD, whiteRookPosition)
  ).toStrictEqual({ piece: "Rook", side: "white" });
  const BlackQueenPosition = {
    column: "D",
    row: 8,
  };
  expect(
    helpers.getPieceAtPosition(constants.GAME_START_BOARD, BlackQueenPosition)
  ).toStrictEqual({ piece: "Queen", side: "black" });
});

test("get square colour at board position", () => {
  const whiteRookPosition = {
    column: "A",
    row: 1,
  };
  expect(helpers.getSquareColour(whiteRookPosition)).toBe("black");
  const BlackQueenPosition = {
    column: "D",
    row: 8,
  };
  expect(helpers.getSquareColour(BlackQueenPosition)).toBe("black");
});

test("get current player", () => {
  expect(helpers.getCurrentPlayer([])).toBe("white");
  expect(helpers.getCurrentPlayer([{}])).toBe("black");
  expect(helpers.getCurrentPlayer([{}, {}])).toBe("white");
});

test("check if is current player's move", () => {
  expect(helpers.isCurrentPlayerMove([], "white")).toBeTruthy();
  expect(helpers.isCurrentPlayerMove([{}, {}], "black")).toBeFalsy();
});

test("check if move is valid", () => {
  const validMove = {
    from: {
      column: "B",
      row: "1",
    },
    to: {
      column: "C",
      row: "3",
    },
  };
  const partialMove = {
    from: {
      column: "B",
      row: "1",
    },
  };
  const invalidFromRowMove = {
    from: {
      column: "B",
      row: "0",
    },
    to: {
      column: "C",
      row: "3",
    },
  };
  const invalidToColumnMove = {
    from: {
      column: "B",
      row: "1",
    },
    to: {
      column: "I",
      row: "3",
    },
  };
  expect(helpers.isValidMove(validMove)).toBeTruthy();
  expect(helpers.isValidMove(partialMove)).toBeFalsy();
  expect(helpers.isValidMove(invalidFromRowMove)).toBeFalsy();
  expect(helpers.isValidMove(invalidToColumnMove)).toBeFalsy();
});

test("check if a move is partially complete and so far valid", () => {
  const partialMove = {
    from: {
      column: "B",
      row: "1",
    },
  };
  const incompletePartialMove = {
    from: {
      column: "B",
    },
  };
  expect(helpers.isValidMovePartial(partialMove)).toBeTruthy();
  expect(helpers.isValidMovePartial(incompletePartialMove)).toBeFalsy();
});
