import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import UserNameInput from './UserNameInput';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  root: {
    width: 300,
    borderRight: '1px solid #eee',
    overflowY: 'auto',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    height: 50,
  },
  menuIconButton: {
    margin: 10,
  },
  closeButton: {
    marginLeft: 'auto',
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
}));

export default (props) => {
  const { users, showInitButton, me, onInitButtonClick, onNameChange } = props;
  const classes = useStyles();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleMobileDrawerOpen = () => {
    setMobileDrawerOpen(true);
  };

  const handleMobileDrawerClose = () => {
    setMobileDrawerOpen(false);
  };

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    onNameChange && onNameChange({ userId: name, name: value });
  };

  const drawer = (
    <>
      <header className={classes.header}>
        <Typography variant="subtitle1" color="inherit">
          <Link component={RouterLink} to="/" color="inherit">
            Simple Planning Poker
          </Link>
        </Typography>
        <Hidden smUp>
          <IconButton
            color="inherit"
            className={classes.closeButton}
            onClick={handleMobileDrawerClose}
          >
            <CloseIcon />
          </IconButton>
        </Hidden>
      </header>
      {showInitButton ? (
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
    </>
  );

  return (
    <>
      <Hidden smUp>
        <div>
          <IconButton
            className={classes.menuIconButton}
            onClick={handleMobileDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Hidden>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          open={mobileDrawerOpen}
          classes={{
            paper: classes.drawer,
          }}
          onClose={handleMobileDrawerClose}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <div className={classes.root}>{drawer}</div>
      </Hidden>
    </>
  );
};
