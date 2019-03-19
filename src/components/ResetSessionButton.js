import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  noBorderRadius: {
    borderRadius: 0,
  },
});

export default (props) => {
  const { noBorderRadius, onClick } = props;

  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      size="large"
      className={noBorderRadius && classes.noBorderRadius}
      onClick={onClick}
    >
      {t('ResetSessionButton.text')}
    </Button>
  );
};
