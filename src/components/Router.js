import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./gameplay";
import GameSetup from "./gamesetup";
import NotFound from "./NotFound";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={"/game/:gameId"} component={Game} />
        <Route path="/" render={(props) => <GameSetup />} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;
