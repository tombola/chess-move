import React from 'react';
import PiecePlacement from './PiecePlacement'

class MoveTo extends React.Component {
    render() {
        return (
            <PiecePlacement sendPlacement={this.props.setNextMoveTo} moveDescription="From" buttonText="Play Move"/>
        )
    }
}

export default MoveTo;

