import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from './Card';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    marginBottom: 40,
  },
  card: {
    marginLeft: 20,
    marginRight: 20,
  },
});

const CARD_VALUES = [
  { id: 0, text: '0.5' },
  { id: 1, text: '1' },
  { id: 2, text: '2' },
  { id: 3, text: '3' },
  { id: 4, text: '5' },
  { id: 5, text: '8' },
  { id: 6, text: '13' },
  { id: 7, text: '20' },
  { id: 8, text: '40' },
  { id: 9, text: '100' },
];

export default (props) => {
  const { selectedCardId, onCardClick } = props;

  const classes = useStyles();

  return (
    <>
      <div className={classes.row}>
        {CARD_VALUES.slice(0, 5).map((value) => (
          <Card
            key={value.id}
            className={classes.card}
            value={value}
            isSelected={value.id === selectedCardId}
            onClick={onCardClick}
          />
        ))}
      </div>
      <div className={classes.row}>
        {CARD_VALUES.slice(5, 10).map((value) => (
          <Card
            key={value.id}
            className={classes.card}
            value={value}
            isSelected={value.id === selectedCardId}
            onClick={onCardClick}
          />
        ))}
      </div>
    </>
  );
};
