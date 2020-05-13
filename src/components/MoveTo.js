import React from 'react';
import PiecePlacement from './PiecePlacement'

class MoveTo extends React.Component {
    recordMoveTo = (move) => {
        console.log("Record move to")
        console.log(move)
    }

    render() {
        console.log("Move from")
        return (
            <PiecePlacement sendPlacement={this.recordMoveTo}/>
        )
    }
}

export default MoveTo;

