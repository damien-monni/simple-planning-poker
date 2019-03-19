import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import Link from '@material-ui/core/Link';

import LanguageSelect from './LanguageSelect';

const useStyles = makeStyles({
  languageSelect: {
    marginBottom: 15,
  },
  openSourced: {
    opacity: 0.7,
    fontStyle: 'italic',
  },
});

export default (props) => {
  const { className } = props;

  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <footer className={className}>
      <LanguageSelect className={classes.languageSelect} />
      <Typography
        gutterBottom
        className={classes.author}
        noWrap
        color="inherit"
      >
        {t('Footer.author')}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/damien-monni/"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
        >
          Damien Monni
        </Link>
      </Typography>
      <Typography
        className={classes.openSourced}
        variant="caption"
        color="inherit"
      >
        {t('Footer.openSourced')}
        <Link
          href="https://github.com/damien-monni/simple-planning-poker"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="always"
        >
          GitHub
        </Link>{' '}
        - v1.0.0
      </Typography>
    </footer>
  );
};
