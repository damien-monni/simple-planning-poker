import React from 'react';
import { makeStyles } from '@material-ui/styles';

import useSession from '../hooks/useSession';
import SideBar from './SideBar';
import SessionContent from './SessionContent';

const useStyles = makeStyles({
  main: {
    height: '100%',
    display: 'flex',
  },
});

export default (props) => {
  const { match } = props;

  const { sessionId } = match.params;

  const classes = useStyles();

  const { sessionState } = useSession({ sessionId });

  return (
    <main className={classes.main}>
      <SideBar sessionState={sessionState} />
      <SessionContent sessionState={sessionState} />
    </main>
  );
};
