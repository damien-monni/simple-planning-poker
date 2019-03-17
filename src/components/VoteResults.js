import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listItem: {
    backgroundColor: 'white',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  card: {
    flex: 'inherit',
    borderRight: '1px solid #f0f0f0',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
    padding: 0,
  },
  cardPrimary: {
    margin: '30px 50px',
    fontSize: '2rem',
    color: '#555',
    flex: 1,
  },
  usersContainer: {
    margin: 30,
  },
});

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
    <List disablePadding className={className}>
      {grouppedCards.map((card) => (
        <ListItem key={card.id} disableGutters className={classes.listItem}>
          <ListItemText
            classes={{ root: classes.card, primary: classes.cardPrimary }}
          >
            {card.text}
          </ListItemText>
          <div className={classes.usersContainer}>
            {card.userNames.map((name, index) => (
              <Typography key={index}>{name}</Typography>
            ))}
          </div>
        </ListItem>
      ))}
    </List>
  );
};
