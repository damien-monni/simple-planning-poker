import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

import SessionUrl from './SessionUrl';
import Cards from './Cards';
import VoteResults from './VoteResults';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  urlContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
  },
  content: {
    width: '100%',
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
  },
  voteResults: {
    margin: 20,
    [theme.breakpoints.up('sm')]: {
      margin: 50,
    },
  },
}));

export default (props) => {
  const { sessionState, voteFinished, onCardClick, onInitButtonClick } = props;

  const classes = useStyles();

  const clickedCard =
    sessionState.clickedCards &&
    sessionState.clickedCards.find((c) => c.userId === sessionState.me.id);
  const selectedCardId = clickedCard && clickedCard.id;

  return (
    <section className={classes.root}>
      <Hidden xsDown>
        <div className={classes.urlContainer}>
          <SessionUrl />
        </div>
      </Hidden>
      <section className={classes.content}>
        {voteFinished ? (
          <VoteResults
            className={classes.voteResults}
            sessionState={sessionState}
          />
        ) : (
          <Cards selectedCardId={selectedCardId} onCardClick={onCardClick} />
        )}
      </section>
      <Hidden smUp>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          size="large"
          onClick={onInitButtonClick}
        >
          Réinitialiser
        </Button>
      </Hidden>
    </section>
  );
};
