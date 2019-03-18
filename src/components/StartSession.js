import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    width: 500,
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
  form: {
    margin: 50,
    [theme.breakpoints.down('xs')]: {
      margin: 25,
      marginTop: 40,
      marginBottom: 40,
    },
  },
  textField: {
    marginBottom: 20,
  },
}));

export default (props) => {
  const { nameInputValue, onNameInputChange, onSubmit } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.textField}>
          <TextField
            label="Votre nom"
            value={nameInputValue}
            fullWidth
            variant="outlined"
            autoFocus
            onChange={onNameInputChange}
          />
        </div>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="secondary"
          disabled={!nameInputValue.length}
        >
          Démarrer une nouvelle session
        </Button>
      </form>
    </div>
  );
};
