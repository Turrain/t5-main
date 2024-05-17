import React from 'react';
import { Grid, Container } from '@mui/material';
import HotelCard from './HotelCard'; // Make sure the path is correct

const HotelGrid = () => {
  return (
    <Container sx={{ py: 4 }}>
    <Grid container spacing={4}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <HotelCard />
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default HotelGrid;
