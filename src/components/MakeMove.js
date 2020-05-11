import React from 'react';
import ChessPieceIcon from './ChessPieceIcon';
import FromSquare from './FromSquare';
import NextMoveButton from './NextMoveButton';
import ToSquare from './ToSquare';

class MakeMove extends React.Component {
    render() {
        console.log("Enter your next move")
        return (
            <React.Fragment>
                <FromSquare position={this.props.moveFrom} />
                <ChessPieceIcon />
                <ToSquare position={this.props.moveTo} />
                <NextMoveButton />
            </React.Fragment>
        )
    }
}

export default MakeMove;