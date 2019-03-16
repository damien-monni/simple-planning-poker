import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SideBar from './SideBar';
import SessionContent from './SessionContent';

const useStyles = makeStyles({
  main: {
    height: '100%',
    display: 'flex',
  },
});

export default () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <SideBar />
      <SessionContent />
    </main>
  );
};
