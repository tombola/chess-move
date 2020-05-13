import React from 'react';
import { COLUMNS, ROWS, GAME_PIECE_NOTATION, GAME_INITIAL_STATE } from '../utilities/constants'

class PiecePlacement extends React.Component {
    columnRef = React.createRef();
    rowRef = React.createRef();
    pieceRef = React.createRef();

    submitPlacement = event => {
        event.preventDefault();
        const move = {
            column: this.columnRef.current.value,
            row: this.rowRef.current.value,
            piece: this.pieceRef.current.value
        }
        this.props.sendPlacement(move)
        console.log(move)
    }

    render() {
        console.log("Enter your next move")
        const col_options = COLUMNS.map(c => <option value={c} key={`c${c}`}>{c}</option>)
        const row_options = ROWS.map(r => <option value={r} key={`r${r}`}>{r}</option>)
        const piece_options = Object.keys(GAME_PIECE_NOTATION).map(p => <option value={p} key={p}>{GAME_PIECE_NOTATION[p]}</option>)
        return (
            <form onSubmit={this.submitPlacement}>
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

export default PiecePlacement;

