import React from 'react';

class FromSquare extends React.Component {
    render() {
        return <p className="move-description--from">{this.props.position[0]}{this.props.position[1]} →</p>
    }
}

export default FromSquare;