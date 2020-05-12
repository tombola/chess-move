export const COLUMNS = ["A","B","C","D","E","F","G","H"]
export const ROWS = [1,2,3,4,5,6,7,8]

export const GAME_PIECES = {
    "king":     {"white": "♔", "black": "♚"},
    "queen":    {"white": "♕", "black": "♛"},
    "rook":     {"white": "♖", "black": "♜"},
    "bishop":   {"white": "♗", "black": "♝"},
    "knight":   {"white": "♘", "black": "♞"},
    "pawn":     {"white": "♙", "black": "♟"},
}

export const GAME_PIECE_OPTIONS = [
    "king",
    "queen",
    "rook",
    "bishop",
    "knight",
    "pawn",
]

export const GAME_INITIAL_STATE = [
    ["BR","BN","BB","BQ","BK","BB","BN","BR"],
    ["BP","BP","BP","BP","BP","BP","BP","BP"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["WP","WP","WP","WP","WP","WP","WP","WP",],
    ["WR","WN","WB","WQ","WK","WB","WN","WR"],
]