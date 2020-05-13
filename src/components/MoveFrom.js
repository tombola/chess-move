import React from 'react';
import PiecePlacement from './PiecePlacement'

class MoveFrom extends React.Component {
    recordMoveFrom = (move) => {
        console.log("Record move from")
        console.log(move)
    }

    render() {
        console.log("Move from")
        return (
            <PiecePlacement sendPlacement={this.recordMoveFrom}/>
        )
    }
}

export default MoveFrom;

