import { useEffect, useMemo, useRef, useReducer } from 'react';
import PubNub from 'pubnub';
import shortid from 'shortid';

const pubnub = new PubNub({
  publishKey: process.env.REACT_APP_PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.REACT_APP_PUBNUB_SUBSCRIBE_KEY,
});

const normalizeState = (state) => {
  const normalizedState = { ...state };
  delete normalizedState.me;
  return normalizedState;
};

/*******************************
- Subscribe to pubnub channel based on sessionId
  
- Check in local storage if session exists and if we are admin
  - If we are admin
    - Set PubNub listner to "join" messages
      - When "join" is received, add the new user to user list
      - Send the new state by emitting a "new-state" message
  - Else
    - Set PubNub to "new-state" messages
    -Emit a "join" message
*******************************/
export default ({ sessionId }) => {
  // Util function to publish a message
  const publish = (message) => {
    const publishConfig = {
      channel: sessionId,
      message,
    };
    pubnub.publish(publishConfig);
  };

  // Subscribe to PubNub session channel on component mount
  useEffect(() => {
    pubnub.subscribe({ channels: [sessionId] });

    return () => {
      // Unsubscribe on unmount
      pubnub.unsubscribeAll();
    };
  }, []);

  // Check if we are admin or joining a session
  // We use memo because we only do that once
  const { existingSession, existingMe } = useMemo(() => {
    const stateString = localStorage.getItem('spp-state');
    const state = stateString && JSON.parse(stateString);

    const exSession =
      state &&
      state.sessions &&
      state.sessions.find((session) => session.id === sessionId);
    const exMe =
      exSession && exSession.users.find((u) => u.id === exSession.me.id);
    return { existingSession: exSession, existingMe: exMe };
  }, [sessionId]);

  // Current state
  const s = existingSession || {
    me: existingMe || { id: shortid.generate(), name: 'Anonyme' },
  };

  const [sessionState, setSessionState] = useReducer(
    (prevSessionState, newSessionState) => {
      const stateString = localStorage.getItem('spp-state');
      const state = stateString && JSON.parse(stateString);

      if (state) {
        const newSessions = state.sessions.map((session) => {
          if (session.id === sessionId) {
            return newSessionState;
          }
          return session;
        });
        localStorage.setItem(
          'spp-state',
          JSON.stringify({ sessions: newSessions }),
        );
      }
      return newSessionState;
    },
    s,
  );

  const expectedStateRef = useRef(s);
  const pongsRef = useRef([]);

  useEffect(() => {
    expectedStateRef.current = sessionState;
  }, [sessionState]);

  // Handle watchdog
  const removeDisconectedUser = (state) => {
    const connectedUsers = expectedStateRef.current.users.filter(
      (u) => u.isAdmin || pongsRef.current.find((pid) => pid === u.id),
    );
    const newState = { ...expectedStateRef.current, users: connectedUsers };
    setSessionState(newState);
    const normalizedState = normalizeState(newState);
    publish({ action: 'new-state', state: normalizedState });
  };
  const startWatchdog = () => {
    setInterval(() => {
      removeDisconectedUser();
      pongsRef.current = [];
      publish({ action: 'ping' });
    }, 5000);
  };

  useEffect(() => {
    // set listners based on our role (admin or user)
    const adminListeners = {
      status: function(statusEvent) {
        if (statusEvent.category === 'PNConnectedCategory') {
          // We joined the session
          // Start watchdog to detect users' disconections
          startWatchdog();
        }
      },
      message({ message }) {
        switch (message.action) {
          case 'join': {
            // Add joined user to state
            const newUser = message.user;
            const newState = {
              ...sessionState,
              users: [...sessionState.users, newUser],
            };
            pongsRef.current = [...pongsRef.current, newUser.id];
            setSessionState(newState);
            const normalizedState = normalizeState(newState);
            publish({ action: 'new-state', state: normalizedState });
            break;
          }
          case 'new-name': {
            const { name, userId } = message;

            const newState = {
              ...sessionState,
              users: sessionState.users.map((user) => {
                if (user.id !== userId) {
                  return user;
                }
                return { ...user, name };
              }),
            };

            setSessionState(newState);
            const normalizedState = normalizeState(newState);
            publish({ action: 'new-state', state: normalizedState });
            break;
          }
          case 'card-click': {
            const { userId, cardId, cardText } = message;
            const clickedCard = { id: cardId, text: cardText, userId };
            // Filter in case the user already clicked on a card previously
            const prevClickedCards = sessionState.clickedCards
              ? sessionState.clickedCards.filter((c) => c.userId !== userId)
              : [];
            // Set new clicked card state
            const newClickedCards = [...prevClickedCards, clickedCard];
            const newState = {
              ...sessionState,
              clickedCards: newClickedCards,
            };
            setSessionState(newState);
            const normalizedState = normalizeState(newState);
            publish({ action: 'new-state', state: normalizedState });
            break;
          }
          case 'pong': {
            pongsRef.current = [...pongsRef.current, message.userId];
            break;
          }
          default:
            break;
        }
      },
    };

    const userListeners = {
      status: function(statusEvent) {
        if (statusEvent.category === 'PNConnectedCategory') {
          // We joined the session
          // Emit a join message
          publish({
            action: 'join',
            user: sessionState.me,
          });
        }
      },
      message({ message }) {
        switch (message.action) {
          case 'new-state': {
            setSessionState({ ...message.state, me: sessionState.me });
            break;
          }
          case 'ping': {
            publish({ action: 'pong', userId: sessionState.me.id });
            break;
          }
          default:
            break;
        }
      },
    };
    if (existingMe && existingMe.isAdmin) {
      // We are the session admin
      pubnub.addListener(adminListeners);
      return () => {
        pubnub.removeListener(adminListeners);
      };
    }
    // We are joining an existing session
    // Set listeners
    pubnub.addListener(userListeners);
    return () => {
      pubnub.removeListener(userListeners);
    };
  });

  const handleCardClick = ({ id, text }) => {
    publish({
      action: 'card-click',
      userId: sessionState.me.id,
      cardId: id,
      cardText: text,
    });
  };

  const handleInitButtonClick = () => {
    const newState = { ...sessionState, clickedCards: [] };
    setSessionState(newState);
    const normalizedState = normalizeState(newState);
    publish({ action: 'new-state', state: normalizedState });
  };

  const handleNameChange = ({ userId, name }) => {
    publish({ action: 'new-name', userId, name });
  };

  return {
    sessionState,
    handleCardClick,
    handleNameChange,
    handleInitButtonClick,
  };
};
