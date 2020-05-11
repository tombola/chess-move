import React from 'react';

class ChessSquare extends React.Component {
    render() {
        return (
            <div className="chess-square">
                <span className="chess-piece">♘</span>
            </div>
        )
    }
}

export default ChessSquare;