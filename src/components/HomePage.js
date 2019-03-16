import React from 'react';

import useStartSession from '../hooks/useStartSession';
import StartSession from './StartSession';

export default (props) => {
  const { history } = props;

  const { name, onNameChange, onSubmit } = useStartSession({ history });

  return (
    <StartSession
      nameInputValue={name}
      onNameInputChange={onNameChange}
      onSubmit={onSubmit}
    />
  );
};
