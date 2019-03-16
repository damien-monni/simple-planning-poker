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

export default () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <SessionUrl url="https://simple-planning-poker.netlify.com/session/fkdlmfkdslm" />
      <section className={classes.content}>
        <StoryInput className={classes.storyInput} />
        <Cards />
      </section>
    </section>
  );
};
