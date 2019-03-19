import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useTranslation } from 'react-i18next';

import frenchIcon from '../assets/icons/french.png';
import englishIcon from '../assets/icons/english.png';

const useStyles = makeStyles({
  iconButton: {
    width: 35,
    height: 35,
    marginRight: 20,
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
    <div className={className}>
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
