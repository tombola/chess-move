import React from 'react';
import ChessSquare from './ChessSquare';
import FromSquare from './FromSquare';
import NextMoveButton from './NextMoveButton';
import ToSquare from './ToSquare';

class MoveDescription extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FromSquare />
                <ChessSquare />
                <ToSquare />
                <NextMoveButton />
            </React.Fragment>
        )
    }
}

export default MoveDescription;