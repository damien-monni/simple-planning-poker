import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import frenchIcon from '../assets/icons/french.png';
import englishIcon from '../assets/icons/english.png';

const useStyles = makeStyles({
  root: {
    marginRight: 15,
    marginLeft: 15,
  },
  iconButton: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginLeft: 10,
  },
  flagImage: {
    width: '100%',
  },
});

export default (props) => {
  const { className } = props;

  const classes = useStyles();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={classNames(classes.root, className)}>
      <ButtonBase
        disableRipple
        className={classes.iconButton}
        onClick={() => changeLanguage('fr')}
      >
        <img
          src={frenchIcon}
          className={classes.flagImage}
          alt={t('LanguageSelect.frenchAlt')}
        />
      </ButtonBase>
      <ButtonBase
        disableRipple
        className={classes.iconButton}
        onClick={() => changeLanguage('en')}
      >
        <img
          src={englishIcon}
          className={classes.flagImage}
          alt={t('LanguageSelect.englishAlt')}
        />
      </ButtonBase>
    </div>
  );
};
