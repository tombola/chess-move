import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './Game';
import MoveDescription from './MoveDescription';
import MakeMove from './MakeMove';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Game} />
            <Route path="/game/:gameId/nextmove" component={MakeMove} />
            <Route path="/game/:gameId/currentmove" component={MoveDescription} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;