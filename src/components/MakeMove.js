import React from 'react';
import { COLUMNS, ROWS, GAME_PIECE_OPTIONS } from '../utilities/constants'

class MakeMove extends React.Component {
    render() {
        console.log("Enter your next move")
        const col_options = COLUMNS.map(c => <option key={`c${c}`}>{c}</option>)
        const row_options = ROWS.map(r => <option key={`r${r}`}>{r}</option>)
        const piece_options = GAME_PIECE_OPTIONS.map(p => <option key={`p${p}`}>{p}</option>)
        return (
            <form>
                <select name="column">
                    {col_options}
                </select>
                <select name="row">
                    {row_options}
                </select>
                <select name="row">
                    {piece_options}
                </select>
            </form>
        )
    }
}

export default MakeMove;

