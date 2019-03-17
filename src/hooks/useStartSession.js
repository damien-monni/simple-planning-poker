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

    // Build session object
    const sessionId = shortid.generate();
    const me = { id: shortid.generate() };
    const users = [{ ...me, name, isAdmin: true }];
    const session = { id: sessionId, me, users };

    // Persist state
    const prevState = JSON.parse(localStorage.getItem('spp-state'));
    const prevSessions = prevState && prevState.sessions;

    localStorage.setItem(
      'spp-state',
      JSON.stringify({
        sessions: prevSessions ? [...prevSessions, session] : [session],
      }),
    );

    // Redirect to new session
    history.push(`/session/${sessionId}`);
  };

  return { name, onNameChange, onSubmit };
};
