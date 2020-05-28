import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GameSetup from "../components/gamesetup";

function renderWithRouter(component) {
  return render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={GameSetup} />
      </Switch>
    </BrowserRouter>
  );
}

beforeEach(() => {
  localStorage.clear();
});

test("Renders next move link", () => {
  renderWithRouter(<GameSetup />);
  const nextMoveText = screen.getByText(/New Game/i);
  expect(nextMoveText).toBeInTheDocument();
});

test("Renders continue game link", () => {
  localStorage.setItem("currentGameId", "fdgh124");
  renderWithRouter(<GameSetup />);
  const continueGameLink = screen.getByText(/Continue current game/i);
  expect(continueGameLink).toBeInTheDocument();
});
