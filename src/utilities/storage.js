import base from "../base";

export function syncGameWithStorage(gameComponent) {
  let firebaseRefs = {};
  firebaseRefs.moveHistory = base.syncState("joevtom/moveHistory", {
    context: gameComponent,
    state: "moveHistory",
  });
  firebaseRefs.gameState = base.syncState("joevtom/gameState", {
    context: gameComponent,
    state: "gameState",
  });
  gameComponent.firebaseRefs = firebaseRefs;
}

export function disconnectGameFromStorage(gameComponent) {
  for (const ref of Object.values(gameComponent.firebaseRefs)) {
    base.removeBinding(ref);
  }
}
