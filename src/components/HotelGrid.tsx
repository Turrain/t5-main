
import { Grid, Container } from '@mui/material';
import HotelCard from './HotelCard'; // Make sure the path is correct

const HotelGrid = () => {
  return (
  
    <Grid container spacing={4}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <HotelCard />
        </Grid>
      ))}
    </Grid>

  );
};

export default HotelGrid;
