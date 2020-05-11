import React from 'react';
import { withRouter } from 'react-router-dom';

class NextMoveButton extends React.Component {
    nextMove = () => {
        const { history } = this.props;
        if (history) {
            history.push('nextmove')
        }
    }
    render() {
        return <button className="next-move" onClick={this.nextMove}>Next Move</button>
    }
}

export default withRouter(NextMoveButton);