import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    padding: '15px 25px',
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderTopWidth: 0,
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 0 30px rgba(33, 150, 243, 0.28)',
  },
  url: {
    display: 'initial',
  },
});

export default () => {
  const classes = useStyles();

  const url = document.location.href;

  return (
    <div className={classes.root}>
      <Typography>
        <b>URL de partage : </b>
        <Typography className={classes.url} component="span" color="primary">
          {url}
        </Typography>
      </Typography>
    </div>
  );
};
