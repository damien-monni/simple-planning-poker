import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    backgroundColor: theme.palette.primary.main,
    overflowY: 'auto',
    flexShrink: 0,
  },
}));

export default () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};
