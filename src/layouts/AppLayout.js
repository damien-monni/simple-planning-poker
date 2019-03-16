import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HomePage from '../components/HomePage';
import SessionPage from '../components/SessionPage';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { main: '#ff4b55' },
  },
});

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/session/:sessionId/" component={SessionPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
