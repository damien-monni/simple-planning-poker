import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 15,
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
    padding: 10,
  },
  button: {
    fontSize: '3rem',
    color: theme.palette.primary.contrastText,
    flex: 1,
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
  },
}));

export default (props) => {
  const { className, value, onClick } = props;

  const classes = useStyles();

  const handleClick = () => {
    onClick && onClick(value);
  };

  return (
    <div className={classNames(classes.root, className)}>
      <ButtonBase onClick={handleClick} className={classes.button}>
        {value.text}
      </ButtonBase>
    </div>
  );
};
