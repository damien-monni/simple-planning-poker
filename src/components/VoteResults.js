import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  listItem: {
    backgroundColor: 'white',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    flex: 'inherit',
    width: 80,
    textAlign: 'center',
    borderRight: '1px solid #f0f0f0',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      width: 180,
    },
  },
  cardPrimary: {
    margin: '30px 10px',
    fontSize: '1.5rem',
    color: '#555',
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      margin: '30px 50px',
      fontSize: '2rem',
    },
  },
  usersContainer: {
    margin: 30,
  },
  name: {
    fontSize: '1.1rem',
  },
}));

export default (props) => {
  const { className, sessionState } = props;
  const { users, clickedCards } = sessionState;
  const classes = useStyles();

  const grouppedCards = clickedCards.reduce((reducedCards, card) => {
    const userName = users.find((u) => u.id === card.userId).name;
    const prevCard = reducedCards.find((c) => c.id === card.id);
    if (!prevCard) {
      return [
        ...reducedCards,
        {
          id: card.id,
          text: card.text,
          userNames: [userName],
        },
      ];
    }

    return reducedCards.map((c) => {
      if (c.id === card.id) {
        return { ...c, userNames: [c.userNames, userName] };
      }
      return c;
    });
  }, []);

  return (
    <List disablePadding className={classNames(classes.root, className)}>
      {grouppedCards.map((card) => (
        <ListItem key={card.id} disableGutters className={classes.listItem}>
          <ListItemText
            classes={{ root: classes.card, primary: classes.cardPrimary }}
          >
            {card.text}
          </ListItemText>
          <div className={classes.usersContainer}>
            {card.userNames.map((name, index) => (
              <Typography key={index} className={classes.name}>
                {name}
              </Typography>
            ))}
          </div>
        </ListItem>
      ))}
    </List>
  );
};
