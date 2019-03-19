import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';

import SessionUrl from './SessionUrl';
import Cards from './Cards';
import VoteResults from './VoteResults';
import ResetSessionButton from './ResetSessionButton';

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
    flex: 1,
    display: 'flex',
  },
  voteResults: {
    margin: 20,
    [theme.breakpoints.up('sm')]: {
      margin: 50,
    },
  },
}));

export default (props) => {
  const {
    sessionState,
    voteFinished,
    showInitButton,
    onCardClick,
    onInitButtonClick,
  } = props;

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
      {showInitButton ? (
        <Hidden smUp>
          <ResetSessionButton noBorderRadius onClick={onInitButtonClick} />
        </Hidden>
      ) : null}
    </section>
  );
};
