import React from 'react';
import ChessPieceIcon from './ChessPieceIcon';
import FromSquare from './FromSquare';
import NextMoveButton from './NextMoveButton';
import ToSquare from './ToSquare';

class MoveDescription extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FromSquare position={this.props.getPrecedingMove()} />
                <ChessPieceIcon chessPiece={this.props.getLastMovePiece()} />
                <ToSquare position={this.props.getLastMove()} />
                <NextMoveButton />
            </React.Fragment>
        )
    }
}

export default MoveDescription;