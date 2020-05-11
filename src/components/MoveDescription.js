import React from 'react';
import ChessPieceIcon from './ChessPieceIcon';
import { getColumn } from '../helpers';
import FromSquare from './FromSquare';
import NextMoveButton from './NextMoveButton';
import ToSquare from './ToSquare';

class MoveDescription extends React.Component {
    render() {
        return (
            <React.Fragment>
                {console.log(getColumn(this.props.moveFrom))}
                <FromSquare position={this.props.moveFrom} />
                <ChessPieceIcon />
                <ToSquare position={this.props.moveTo} />
                <NextMoveButton />
            </React.Fragment>
        )
    }
}

export default MoveDescription;