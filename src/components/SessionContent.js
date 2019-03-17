import React from 'react';
import { makeStyles } from '@material-ui/styles';

import SessionUrl from './SessionUrl';
import StoryInput from './StoryInput';
import Cards from './Cards';

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
});

export default (props) => {
  const { sessionState, onCardClick } = props;

  const classes = useStyles();

  // Check if everybody has clicked on a card
  const voteFinished =
    sessionState &&
    sessionState.users &&
    sessionState.clickedCards &&
    sessionState.users.length === sessionState.clickedCards.length;

  return (
    <section className={classes.root}>
      <SessionUrl url="https://simple-planning-poker.netlify.com/session/fkdlmfkdslm" />
      <section className={classes.content}>
        <StoryInput className={classes.storyInput} />
        {voteFinished ? 'finished' : <Cards onCardClick={onCardClick} />}
      </section>
    </section>
  );
};
