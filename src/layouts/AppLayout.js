import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import mainEn from '../i18n/main-en';
import mainFr from '../i18n/main-fr';
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

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: mainEn,
      fr: mainFr,
    },
    defaultNS: 'component',
    lng: 'fr',
    fallbackLng: 'fr',
  });

export default () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/terms" component={HomePage} />
          <Route exact path="/session/:sessionId/" component={SessionPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
