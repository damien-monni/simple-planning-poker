import React, { useState, useEffect } from 'react';
import AdminIcon from '@material-ui/icons/VerifiedUser';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  adminIcon: {
    marginLeft: 8,
    color: '#f44336',
  },
  disabled: {
    color: theme.palette.text.primary,
  },
  input: {
    padding: '5px 10px',
  },
  showHover: {
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
}));

export default (props) => {
  const { name, value, isMe, isAdmin, onChange } = props;
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
    <InputBase
      fullWidth
      value={internValue}
      startAdornment={
        isMe ? (
          'ME'
        ) : null ? (
          <InputAdornment>
            <AdminIcon />
          </InputAdornment>
        ) : null
      }
      endAdornment={
        isAdmin ? (
          <InputAdornment>
            <AdminIcon className={classes.adminIcon} />
          </InputAdornment>
        ) : null
      }
      disabled={!isMe}
      classes={{
        root: classNames(classes.input, isMe && classes.showHover),
        disabled: classes.disabled,
      }}
      onChange={onInternChange}
      onBlur={handleBlur}
    />
  );
};
