import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import useStartSession from '../hooks/useStartSession';
import StartSession from './StartSession';
import HomeHeader from './HomeHeader';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    margin: '20px 50px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  terms: {
    marginLeft: 50,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    marginBottom: 80,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    marginBottom: 20,
  },
}));

export default (props) => {
  const { history, match } = props;

  const classes = useStyles();

  const { name, onNameChange, onSubmit } = useStartSession({ history });

  return (
    <div className={classes.root}>
      <HomeHeader match={match} history={history} />
      <main className={classes.main}>
        <Typography className={classes.title} variant="h1" color="inherit">
          Simple Planning Poker
        </Typography>
        <StartSession
          nameInputValue={name}
          onNameInputChange={onNameChange}
          onSubmit={onSubmit}
        />
      </main>
      <Footer className={classes.footer} />
    </div>
  );
};
