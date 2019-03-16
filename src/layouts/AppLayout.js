import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import SessionPage from '../components/SessionPage';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/session/:sessionId" component={SessionPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
