import React from "react";
import { withRouter } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { NEXT_MOVE_FROM } from "../utilities/routes";

class NewGame extends React.Component {
  playSideRef = React.createRef();

  submitNewGame = (event) => {
    // event.preventDefault();
    const playSide = this.playSideRef.current.value;
    const history = this.props.history;
    const gameId = this.props.startNewGame(playSide);
    console.log(`submitNewGame: ${gameId}`);
    // debugger;
    if (playSide === "white") {
      history.push(formatRoute(NEXT_MOVE_FROM, { gameId: this.props.gameId }));
    }
    if (playSide === "black") {
      // TODO: wait for other player to move
    }
  };

  render() {
    return (
      <form onSubmit={this.submitNewGame}>
        <p>Which side would you like to play?</p>
        <select name="play-side" id="play-side" ref={this.playSideRef}>
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
        <input type="submit" value="Start" />
      </form>
    );
  }
}

export default withRouter(NewGame);
