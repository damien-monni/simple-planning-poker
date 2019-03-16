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
  const classes = useStyles();

  const { onCardClick } = useSession();

  return (
    <main className={classes.main}>
      <SideBar />
      <SessionContent onCardClick={onCardClick} />
    </main>
  );
};
