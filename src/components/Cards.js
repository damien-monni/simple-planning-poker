import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: 10,
    flex: 1,
    display: 'flex',
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
  { id: 7, text: '21' },
  { id: 8, text: '34' },
  { id: 9, text: '55' },
];

export default (props) => {
  const { selectedCardId, onCardClick } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {CARD_VALUES.map((value) => (
          <Grid key={value.id} xs={6} md={3} lg={2} item>
            <Card
              key={value.id}
              value={value}
              isSelected={value.id === selectedCardId}
              onClick={onCardClick}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
