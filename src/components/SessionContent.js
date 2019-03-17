import React from 'react';
import { makeStyles } from '@material-ui/styles';

import SessionUrl from './SessionUrl';
import StoryInput from './StoryInput';
import Cards from './Cards';
import VoteResults from './VoteResults';

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
  content: {
    maxWidth: 1200,
    margin: 'auto',
  },
  storyInput: {
    margin: 50,
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
        <StoryInput className={classes.storyInput} />
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
