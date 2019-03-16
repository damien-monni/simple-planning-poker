import { useState } from 'react';
import shortid from 'shortid';

export default ({ history }) => {
  const [name, setName] = useState('');

  const onNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const onSubmit = (event) => {
    event && event.preventDefault();
    localStorage.setItem('spp-state', JSON.stringify({ users: [{ name }] }));
    history.push(`/session/${shortid.generate()}`);
  };

  return { name, onNameChange, onSubmit };
};
