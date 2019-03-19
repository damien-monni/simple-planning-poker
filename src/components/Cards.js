import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid';

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

  return (
    <Grid container>
      {CARD_VALUES.map((value) => (
        <Grid xs={6} md={3} lg={2} item>
          <Card
            key={value.id}
            value={value}
            isSelected={value.id === selectedCardId}
            onClick={onCardClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};
