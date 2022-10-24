import React, { useState, useEffect } from 'react';
import AdminIcon from '@material-ui/icons/VerifiedUser';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import PersonIcon from '@material-ui/icons/Person';
import ObserverIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: 18,
    display: 'flex',
    alignItems: 'center',
  },
  meContainer: {
    width: 30,
    marginLeft: 10,
    marginRight: 7,
  },
  adminIcon: {
    marginLeft: 8,
    color: '#f44336',
  },
  input: {
    padding: '5px 14px',
    borderRadius: 5,
  },
  showHover: {
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
}));

export default (props) => {
  const { name, value, isMe, isAdmin, isObserver, onChange } = props;
  const classes = useStyles();

  const [internValue, setInternValue] = useState(value);

  const onInternChange = (event) => {
    const { value: val } = event.target;
    setInternValue(val);
  };

  const handleBlur = () => {
    onChange({ target: { name, value: internValue } });
  };

  useEffect(() => {
    setInternValue(value);
  }, [value]);

  return (
    <div className={classes.root}>
      <div className={classes.meContainer}>{isMe ? <PersonIcon /> : null}</div>
      <InputBase
        fullWidth
        value={internValue}
        disabled={!isMe}
        classes={{
          root: classNames(classes.input, isMe && classes.showHover),
          disabled: classes.disabled,
        }}
        onChange={onInternChange}
        onBlur={handleBlur}
      />

      {isObserver ? <ObserverIcon /> : null}
      {isAdmin ? <AdminIcon className={classes.adminIcon} /> : null}
    </div>
  );
};
