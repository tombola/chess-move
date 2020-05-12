import React from 'react';
import { COLUMNS, ROWS, GAME_PIECE_OPTIONS } from '../utilities/constants'

class MakeMove extends React.Component {
    columnRef = React.createRef();
    rowRef = React.createRef();
    pieceRef = React.createRef();

    submitMove = event => {
        event.preventDefault();
        const move = {
            column: this.columnRef.current.value,
            row: this.rowRef.current.value,
            piece: this.pieceRef.current.value
        }
        console.log(move)
    }

    render() {
        console.log("Enter your next move")
        const col_options = COLUMNS.map(c => <option key={`c${c}`}>{c}</option>)
        const row_options = ROWS.map(r => <option key={`r${r}`}>{r}</option>)
        const piece_options = GAME_PIECE_OPTIONS.map(p => <option key={`p${p}`}>{p}</option>)
        return (
            <form onSubmit={this.submitMove}>
                <select name="column" ref={this.columnRef}>
                    {col_options}
                </select>
                <select name="row" ref={this.rowRef}>
                    {row_options}
                </select>
                <select name="piece" ref={this.pieceRef}>
                    {piece_options}
                </select>
                <button type="submit">Submit Move</button>
            </form>
        )
    }
}

export default MakeMove;

