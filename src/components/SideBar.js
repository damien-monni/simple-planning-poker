import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import UserNameInput from './UserNameInput';

const useStyles = makeStyles({
  root: {
    width: 300,
    borderRight: '1px solid #eee',
    overflowY: 'auto',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  initButtonContainer: {
    margin: 20,
  },
  membersContainer: {
    marginTop: 'auto',
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default (props) => {
  const { users, showInitButton, me, onInitButtonClick, onNameChange } = props;
  const classes = useStyles();

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    onNameChange && onNameChange({ userId: name, name: value });
  };

  const meIsAdmin = me && me.id === (users && users.find((u) => u.isAdmin).id);

  return (
    <div className={classes.root}>
      {meIsAdmin && showInitButton ? (
        <div className={classes.initButtonContainer}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={onInitButtonClick}
          >
            Réinitialiser
          </Button>
        </div>
      ) : null}
      {Array.isArray(users) ? (
        <div className={classes.membersContainer}>
          <List>
            {users.map((user) => (
              <ListItem className={classes.listItem} key={user.id}>
                <UserNameInput
                  name={user.id}
                  value={user.name}
                  isMe={me && user.id === me.id}
                  isAdmin={user.isAdmin}
                  onChange={handleNameChange}
                />
              </ListItem>
            ))}
          </List>
        </div>
      ) : null}
    </div>
  );
};
