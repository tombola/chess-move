import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GameSetup from "../components/gamesetup";

function renderGameSetupWithRouter(component) {
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

test("should render next move link", () => {
  renderGameSetupWithRouter(<GameSetup />);
  const nextMoveText = screen.getByText(/New Game/i);
  expect(nextMoveText).toBeInTheDocument();
});

test("should render continue game link", () => {
  localStorage.setItem("currentGameId", "fdgh124");
  renderGameSetupWithRouter(<GameSetup />);
  const continueGameLink = screen.getByText(/Continue current game/i);
  expect(continueGameLink).toBeInTheDocument();
});
