import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import GameSetup from "../components/gamesetup";
import Router from "../components/Router";

function renderWithRouter(component) {
  return render(
    <BrowserRouter>
      <Router>{component}</Router>
    </BrowserRouter>
  );
}

beforeEach(() => {
  localStorage.clear();
});

test("Renders next move link", () => {
  const { getByText } = renderWithRouter(<GameSetup />);
  const nextMoveText = getByText(/New Game/i);
  expect(nextMoveText).toBeInTheDocument();
});

test("Renders continue game link", () => {
  localStorage.setItem("currentGameId", "fdgh124");
  const { getByText } = renderWithRouter(<GameSetup />);
  const continueGameLink = getByText(/Continue current game/i);
  expect(continueGameLink).toBeInTheDocument();
});
