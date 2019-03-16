import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    padding: '15px 25px',
    backgroundColor: 'white',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  },
});

export default (props) => {
  const { url } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <b>URL de partage : </b>
        <Link component={RouterLink} to={url}>
          {url}
        </Link>
      </Typography>
    </div>
  );
};
