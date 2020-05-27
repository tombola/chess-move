import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./gameplay";
import GameSetup from "./gamesetup";
import NotFound from "./NotFound";

function Router(props) {
  return (
    <Switch>
      <Route path={"/game/:gameId"} component={Game} />
      <Route path="/" component={GameSetup} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
