import React from 'react';
import ChessPieceIcon from './ChessPieceIcon';
import FromSquare from './FromSquare';
import NextMoveButton from './NextMoveButton';
import ToSquare from './ToSquare';
import { COLUMNS, ROWS, GAME_PIECES } from '../utilities/constants'
import { array } from 'prop-types';

class MakeMove extends React.Component {
    render() {
        console.log("Enter your next move")
        const col_options = COLUMNS.map(c => <option>{c}</option>)
        const row_options = ROWS.map(r => <option>{r}</option>)
        return (
            <form>
                <select>
                    {col_options}
                </select>
                <select>
                    {row_options}
                </select>
            </form>
        )
    }
}

export default MakeMove;

