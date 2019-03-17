import React from 'react';
import { makeStyles } from '@material-ui/styles';
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
  membersContainer: {
    marginTop: 'auto',
  },
}));

export default (props) => {
  const { sessionState } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {sessionState && Array.isArray(sessionState.users) ? (
        <div className={classes.membersContainer}>
          <Typography>Membres</Typography>
          <List>
            {sessionState.users.map((user) => (
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
