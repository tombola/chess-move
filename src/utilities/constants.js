import React from "react";

export const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const ROWS = [1, 2, 3, 4, 5, 6, 7, 8];

export const GAME_PIECE_CHARACTERS = {
  K: { white: "♔", black: "♚" },
  Q: { white: "♕", black: "♛" },
  R: { white: "♖", black: "♜" },
  B: { white: "♗", black: "♝" },
  N: { white: "♘", black: "♞" },
  P: { white: "♙", black: "♟" },
};

export const GAME_PIECE_NOTATION = {
  K: "King",
  Q: "Queen",
  R: "Rook",
  B: "Bishop",
  N: "Knight",
  P: "Pawn",
};

export const GAME_START_BOARD = [
  ["BR", "BN", "BB", "BQ", "BK", "BB", "BN", "BR"],
  ["BP", "BP", "BP", "BP", "BP", "BP", "BP", "BP"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["WP", "WP", "WP", "WP", "WP", "WP", "WP", "WP"],
  ["WR", "WN", "WB", "WQ", "WK", "WB", "WN", "WR"],
];

export const COL_OPTIONS = COLUMNS.map((c) => (
  <option value={c} key={`c${c}`}>
    {c}
  </option>
));

export const ROW_OPTIONS = ROWS.map((r) => (
  <option value={r} key={`r${r}`}>
    {r}
  </option>
));

export const PIECE_OPTIONS = Object.keys(GAME_PIECE_NOTATION).map((p) => (
  <option value={p} key={p}>
    {GAME_PIECE_NOTATION[p]}
  </option>
));
