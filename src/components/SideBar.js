import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AdminIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    backgroundColor: theme.palette.primary.main,
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
}));

export default (props) => {
  const { users, showInitButton, meIsAdmin, onInitButtonClick } = props;
  const classes = useStyles();

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
              <ListItem key={user.id}>
                <ListItemText>
                  {user.name} {user.isAdmin ? <AdminIcon /> : null}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      ) : null}
    </div>
  );
};
