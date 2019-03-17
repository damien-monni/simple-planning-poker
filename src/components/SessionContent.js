import React from 'react';
import { makeStyles } from '@material-ui/styles';

import SessionUrl from './SessionUrl';
import Cards from './Cards';
import VoteResults from './VoteResults';

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 1200,
    margin: 'auto',
  },
  voteResults: {
    margin: 50,
  },
});

export default (props) => {
  const { sessionState, voteFinished, onCardClick } = props;

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <SessionUrl />
      <section className={classes.content}>
        {voteFinished ? (
          <VoteResults
            className={classes.voteResults}
            sessionState={sessionState}
          />
        ) : (
          <Cards onCardClick={onCardClick} />
        )}
      </section>
    </section>
  );
};
