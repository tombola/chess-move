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
  firebaseRefs.nextMove = base.syncState("joevtom/nextMove", {
    context: gameComponent,
    state: "nextMove",
  });
  gameComponent.firebaseRefs = firebaseRefs;
}

export function disconnectGameFromStorage(gameComponent) {
  for (const ref of Object.values(gameComponent.firebaseRefs)) {
    console.log("disconnect firebase ref");
    console.log(ref);
    base.removeBinding(ref);
  }
}
