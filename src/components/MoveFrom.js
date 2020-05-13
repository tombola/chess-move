import React from 'react';
import PiecePlacement from './PiecePlacement'

class MoveFrom extends React.Component {
    render() {
        console.log("Move from")
        return (
            <PiecePlacement sendPlacement={this.props.setNextMoveFrom} moveDescription="From" />
        )
    }
}

export default MoveFrom;

