import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
  },
  button: {
    fontSize: '3rem',
    color: '#666',
    flex: 1,
    height: '100%',
  },
});

export default (props) => {
  const { className, value, onClick } = props;

  const classes = useStyles();

  const handleClick = () => {
    onClick && onClick(value);
  };

  return (
    <div className={classNames(classes.root, className)}>
      <ButtonBase onClick={handleClick} className={classes.button}>
        {value}
      </ButtonBase>
    </div>
  );
};
