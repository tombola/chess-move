import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import Game from "../components/gameplay";

const TEST_GAME_ID = "abcd1234";

const mockHistoryPush = jest.fn();

// Mock to check call to history.push (useHistory hook)
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const mockUseParams = jest.fn();
mockUseParams.mockReturnValue(TEST_GAME_ID);

// Mock for useParams hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    currentGameId: mockUseParams,
  }),
}));

function renderGameWithRouter(component) {
  return render(
    <MemoryRouter initialEntries={[`/game/${TEST_GAME_ID}`]}>
      <Switch>
        <Route path={"/game/:currentGameId"} component={Game} />
      </Switch>
    </MemoryRouter>
  );
}

beforeEach(() => {
  localStorage.clear();
});

test("should ask for move origin", () => {
  localStorage.setItem("currentGameSide", "white");
  renderGameWithRouter(<Game />);

  expect(screen.getByRole("heading", { name: /From/i })).toBeInTheDocument();
  expect(screen.getByLabelText("Column")).toBeInTheDocument();
  expect(screen.getByLabelText("Row")).toBeInTheDocument();
  expect(screen.getByLabelText("Piece")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  // expect(screen.getByRole("option", { name: /2/i })).toBeInTheDocument();

  // fireEvent.click(playWhiteButton);
  // expect(nextMoveText).toBeInTheDocument();
  // expect(mockHistoryPush).toHaveBeenCalledWith("/game/abcd123");
});
