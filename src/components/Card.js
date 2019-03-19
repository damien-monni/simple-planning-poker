import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'stretch',
    transition: 'all 0.2s ease',
    height: '100%',
  },
  card: {
    flex: 1,
    display: 'flex',
    margin: 8,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.up('sm')]: {
      margin: 12,
      padding: 20,
      borderRadius: 15,
    },
    '&:hover': {
      transform: 'translate(3px, 3px)',
      boxShadow: '0 0 50px rgba(0, 0, 0, 0.2)',
    },
  },
  selected: {
    transform: 'translate(3px, 3px)',
  },
  button: {
    fontSize: '2rem',
    color: theme.palette.primary.contrastText,
    flex: 1,
    height: '100%',
    backgroundColor: ({ isSelected }) => {
      return theme.palette[isSelected ? 'secondary' : 'primary'].main;
    },
    borderRadius: 12,
    transition: 'all 0.2s ease',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },
}));

export default (props) => {
  const { className, value, isSelected, onClick } = props;

  const classes = useStyles({ isSelected });

  const handleClick = () => {
    onClick && onClick(value);
  };

  return (
    <div
      className={classNames(
        classes.root,
        className,
        isSelected && classes.selected,
      )}
    >
      <div className={classes.card}>
        <ButtonBase onClick={handleClick} className={classes.button}>
          {value.text}
        </ButtonBase>
      </div>
    </div>
  );
};
