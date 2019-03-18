import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HomePage from '../components/HomePage';
import SessionPage from '../components/SessionPage';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "'Sniglet', cursive",
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '5rem',
      },
    },
  },
  palette: {
    primary: { main: '#428cff', contrastText: '#ffffff' },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        fontFamily: "'Sniglet', cursive",
      },
    },
    MuiButton: {
      contained: {
        boxShadow: 'none',
      },
    },
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
