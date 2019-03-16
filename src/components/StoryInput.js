import React from 'react';
import { makeStyles } from '@material-ui/styles';
import InputBase from '@material-ui/core/InputBase';
import classNames from 'classnames';

const useStyles = makeStyles({
  input: {
    fontSize: '2.5rem',
  },
});

export default (props) => {
  const { className } = props;

  const classes = useStyles();

  return (
    <InputBase
      className={classNames(className, classes.input)}
      autoFocus
      placeholder="Écrivez votre story (optionnel)"
    />
  );
};
