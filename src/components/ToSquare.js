import React from 'react';

class ToSquare extends React.Component {
    render() {
    return <p className="move-description--to">{this.props.position[0]}{this.props.position[1]}</p>
    }
}

export default ToSquare;