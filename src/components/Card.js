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
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'translate(3px, 3px)',
      boxShadow: '0 0 50px rgba(0, 0, 0, 0.2)',
    },
  },
  button: {
    fontSize: '3rem',
    color: theme.palette.primary.contrastText,
    flex: 1,
    height: '100%',
    backgroundColor: ({ isSelected }) => {
      return theme.palette[isSelected ? 'secondary' : 'primary'].main;
    },
    borderRadius: 12,
    transition: 'all 0.2s ease',
  },
}));

export default (props) => {
  const { className, value, isSelected, onClick } = props;
  console.log(isSelected);
  const classes = useStyles({ isSelected });

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
