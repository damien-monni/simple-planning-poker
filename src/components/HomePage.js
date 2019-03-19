import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

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
    '&>*': {
      flexShrink: 0,
    },
  },
  container: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    '&>*': {
      flexShrink: 0,
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: 80,
      marginBottom: 80,
    },
  },
  footer: {
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    marginBottom: 20,
    marginTop: 'auto',
    paddingTop: 20,
  },
}));

export default (props) => {
  const { history, match } = props;

  const classes = useStyles();

  const { name, onNameChange, onSubmit } = useStartSession({ history });

  return (
    <div className={classes.root}>
      <HomeHeader match={match} history={history} />
      <div className={classes.container}>
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
    </div>
  );
};
