import React from 'react';

class ToSquare extends React.Component {
    render() {
        return <p className="move-description--to">{this.props.position}</p>
    }
}

export default ToSquare;