import React from 'react';
import { makeStyles } from '@material-ui/styles';

import useSession from '../hooks/useSession';
import SideBar from './SideBar';
import SessionContent from './SessionContent';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
}));

export default (props) => {
  const { match } = props;

  const { sessionId } = match.params;

  const classes = useStyles();

  const {
    sessionState,
    handleCardClick,
    handleInitButtonClick,
    handleNameChange,
  } = useSession({
    sessionId,
  });

  // Check if everybody has clicked on a card
  const voteFinished =
    sessionState &&
    sessionState.users &&
    sessionState.clickedCards &&
    sessionState.users.length === sessionState.clickedCards.length;
  return (
    <main className={classes.main}>
      <SideBar
        showInitButton={Boolean(voteFinished)}
        users={sessionState.users}
        me={sessionState.me}
        onNameChange={handleNameChange}
        onInitButtonClick={handleInitButtonClick}
      />
      <SessionContent
        sessionState={sessionState}
        voteFinished={voteFinished}
        onCardClick={handleCardClick}
        onInitButtonClick={handleInitButtonClick}
      />
    </main>
  );
};
