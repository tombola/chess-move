import React from 'react';
import ChessPieceIcon from './ChessPieceIcon';
import FromSquare from './FromSquare';
import NextMoveButton from './NextMoveButton';
import ToSquare from './ToSquare';

class MoveDescription extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FromSquare />
                <ChessPieceIcon />
                <ToSquare />
                <NextMoveButton />
            </React.Fragment>
        )
    }
}

export default MoveDescription;