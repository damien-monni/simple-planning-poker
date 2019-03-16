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

const cardValues = [0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];

export default (props) => {
  const { onCardClick } = props;

  const classes = useStyles();

  return (
    <>
      <div className={classes.row}>
        {cardValues.slice(0, 5).map((value) => (
          <Card
            key={value}
            className={classes.card}
            value={value}
            onClick={onCardClick}
          />
        ))}
      </div>
      <div className={classes.row}>
        {cardValues.slice(5, 10).map((value) => (
          <Card
            key={value}
            className={classes.card}
            value={value}
            onClick={onCardClick}
          />
        ))}
      </div>
    </>
  );
};
