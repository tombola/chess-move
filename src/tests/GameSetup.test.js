import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import GameSetup from "../components/gamesetup";

const mockHistoryPush = jest.fn();

// Mock to check call to history.push (useHistory hook)
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

// Mock for game id
jest.mock("shortid", () => ({ generate: () => "abcd123" }));

function renderGameSetupWithRouter(component) {
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <Switch>
        <Route path="/" component={GameSetup} />
      </Switch>
    </Router>
  );
}

beforeEach(() => {
  localStorage.clear();
});

test("should render new game link", () => {
  renderGameSetupWithRouter(<GameSetup />);
  const nextMoveText = screen.getByRole("button", { name: /New Game/i });
  expect(nextMoveText).toBeInTheDocument();
});

test("should render continue game link if game exists", () => {
  localStorage.setItem("currentGameId", "fdgh124");
  renderGameSetupWithRouter(<GameSetup />);
  const continueGameLink = screen.getByText(/Continue current game/i);
  expect(continueGameLink).toBeInTheDocument();
});

test("should not render continue game link if game does not exist", () => {
  renderGameSetupWithRouter(<GameSetup />);
  const continueGameLink = screen.queryByRole("button", {
    name: /Continue current game/i,
  });
  expect(continueGameLink).not.toBeInTheDocument();
});

test("clicking new game link should allow player to select side", () => {
  renderGameSetupWithRouter(<GameSetup />);
  fireEvent.click(screen.getByRole("button", { name: /New Game/i }));
  const whichSideLink = screen.getByText(
    /Which side would you like to play\?/i
  );
  expect(whichSideLink).toBeInTheDocument();
  const playWhiteButton = screen.getByRole("button", { name: /white/i });
  expect(playWhiteButton).toBeInTheDocument();
  const playBlackButton = screen.getByRole("button", { name: /black/i });
  expect(playBlackButton).toBeInTheDocument();

  fireEvent.click(playWhiteButton);
  expect(localStorage.getItem("currentGameId")).toBe("abcd123");
  expect(localStorage.getItem("currentGameSide")).toBe("white");
  expect(mockHistoryPush).toHaveBeenCalledWith("/game/abcd123");
});
