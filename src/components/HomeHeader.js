import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const useStyles = makeStyles({
  header: {
    margin: '20px 50px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  terms: {
    marginLeft: 50,
  },
});

export default withMobileDialog()((props) => {
  const { match, history, fullScreen } = props;

  const classes = useStyles();

  const handleCloseTerms = () => {
    history.push('/');
  };

  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Typography color="inherit" variant="caption">
          <Link component={RouterLink} to="/" color="inherit">
            {t('HomeHeader.home')}
          </Link>
        </Typography>
        <Typography color="inherit" className={classes.terms} variant="caption">
          <Link component={RouterLink} to="/terms" color="inherit">
            {t('HomeHeader.terms')}
          </Link>
        </Typography>
        <Dialog
          fullScreen={fullScreen}
          open={match.path === '/terms'}
          onClose={handleCloseTerms}
        >
          <DialogTitle>{t('HomeHeader.terms')}</DialogTitle>
          <DialogContent>
            <DialogContentText paragraph>
              {t('HomeHeader.createdBy')}
            </DialogContentText>
            <DialogContentText paragraph>
              {t('HomeHeader.address')}
            </DialogContentText>
            <DialogContentText paragraph>
              {t('HomeHeader.contact')}
            </DialogContentText>
            <DialogContentText paragraph>
              {t('HomeHeader.publisherName')}
            </DialogContentText>
            <DialogContentText paragraph>
              {t('HomeHeader.host')}
            </DialogContentText>
            <DialogContentText paragraph>
              {t('HomeHeader.gdpr')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCloseTerms}
            >
              {t('HomeHeader.closeTerms')}
            </Button>
          </DialogActions>
        </Dialog>
      </nav>
    </header>
  );
});
