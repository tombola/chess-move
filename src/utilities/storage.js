import base from "../base";

// // Prior usage in Game component
// componentDidMount() {
//   restoreGameFromLocalStorage(this);
//   syncGameWithStorage(this);
// }
// componentDidUpdate() {
//   updateGameLocalStorage(this);
// }
// componentWillUnmount() {
//   disconnectGameFromStorage(this);
// }

export function syncGameWithStorage(game) {
  const gameId = game.state.gameId;
  console.log(game.state);
  console.log(`sync game to firebase: ${gameId}`);
  let firebaseRefs = {};
  firebaseRefs.moveHistory = base.syncState(`${gameId}/moveHistory`, {
    context: game,
    state: "moveHistory",
  });
  firebaseRefs.gameState = base.syncState(`${gameId}/gameState`, {
    context: game,
    state: "gameState",
  });
  game.firebaseRefs = firebaseRefs;
}

export function disconnectGameFromStorage(game) {
  for (const ref of Object.values(game.firebaseRefs)) {
    base.removeBinding(ref);
  }
}

export function updateGameLocalStorage(game) {
  localStorage.setItem("currentGameId", game.state.gameId);
  localStorage.setItem("nextMove", JSON.stringify(game.state.nextMove));
  localStorage.setItem("playSide", game.state.playSide);
}

// If the browser is refreshed.
// get the current game from local state
export function restoreGameFromLocalStorage(game) {
  const localCurrentGameId = localStorage.getItem("currentGameId");
  const localNextMove = localStorage.getItem("nextMove");
  const localPlaySide = localStorage.getItem("playSide");

  let nextMove = null;
  if (localNextMove) {
    nextMove = JSON.parse(localNextMove);
  }

  if (!game.state.gameId && localCurrentGameId) {
    game.setState({ gameId: localCurrentGameId, localPlaySide, nextMove });
    // If we have a current game, check for unsubmitted next move
    if (localNextMove) {
      game.setState({ nextMove: JSON.parse(localNextMove) });
    }
  }
}
