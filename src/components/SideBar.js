import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
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
import ResetSessionButton from './ResetSessionButton';
import Footer from './Footer';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  root: {
    width: 320,
    borderRight: '1px solid #eee',
    overflowY: 'auto',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '10px 20px',
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
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    marginBottom: 15,
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  observerModeContainer: {
    margin: '20px',
  },
}));

export default (props) => {
  const {
    users,
    showInitButton,
    me,
    onInitButtonClick,
    onNameChange,
    onObserverChange,
  } = props;
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

  const isObserver = useMemo(() => {
    const isObserver = users && users.find((u) => u.id === me.id).observer;
    return isObserver;
  }, [me, users]);

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

      <div className={classes.observerModeContainer}>
        <Button
          color="primary"
          variant="outlined"
          fullWidth
          onClick={() => {
            onObserverChange &&
              onObserverChange({ userId: me.id, observer: !isObserver });
          }}
        >
          {isObserver ? 'Remove observer mode' : 'Switch to observer mode'}
        </Button>
      </div>

      {Array.isArray(users) ? (
        <List>
          {users.map((user) => {
            return (
              <ListItem className={classes.listItem} key={user.id}>
                <UserNameInput
                  isObserver={!!user.observer}
                  name={user.id}
                  value={user.name}
                  isMe={me && user.id === me.id}
                  isAdmin={user.isAdmin}
                  onChange={handleNameChange}
                />
              </ListItem>
            );
          })}
        </List>
      ) : null}

      {showInitButton ? (
        <div className={classes.initButtonContainer}>
          <ResetSessionButton onClick={onInitButtonClick} />
        </div>
      ) : null}

      <Footer className={classes.footer} />
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
