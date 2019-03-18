import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SessionUrl from './SessionUrl';
import Cards from './Cards';
import VoteResults from './VoteResults';

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  menuIconButton: {
    margin: 10,
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

  const clickedCard =
    sessionState.clickedCards &&
    sessionState.clickedCards.find((c) => c.userId === sessionState.me.id);
  const selectedCardId = clickedCard && clickedCard.id;

  return (
    <section className={classes.root}>
      <Hidden smUp>
        <div>
          <IconButton className={classes.menuIconButton}>
            <MenuIcon />
          </IconButton>
        </div>
      </Hidden>
      <Hidden xsDown>
        <SessionUrl />
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
    </section>
  );
};
