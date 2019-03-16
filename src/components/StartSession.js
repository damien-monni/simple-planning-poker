import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default (props) => {
  const { nameInputValue, onNameInputChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Nom"
        value={nameInputValue}
        onChange={onNameInputChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Démarrer une nouvelle session
      </Button>
    </form>
  );
};
