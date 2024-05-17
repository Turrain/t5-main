import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Grid, Container, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const locations = [
  {
    country: 'Россия',
    image: 'https://resize.onlinetours.ru/JTUak4RUh12Bozv2VmjPRb5CzsGZvjDxoN8pr8c20bI/rs:fill:752:327:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm9sdC5zdS9z/eXN0ZW0vdXBsb2Fk/cy9ob3RlbF9waG90/by9pbWFnZS8yNy8x/OC82OS80MS8wNTA1/MjAyMjA4MzA1MDAx/MC5qcGVnP3RpbWVz/dGFtcD0xNjU0ODY4/Mzcw.jpg',
    destinations: [
      { name: 'Большой Сочи', price: 'от 19 779 ₽ / чел' },
      { name: 'Адлер', price: 'от 20 452 ₽ / чел' },
      { name: 'Красная Поляна', price: 'от 23 436 ₽ / чел' },
    ],
  },
  {
    country: 'Турция',
    image: 'https://resize.onlinetours.ru/JTUak4RUh12Bozv2VmjPRb5CzsGZvjDxoN8pr8c20bI/rs:fill:752:327:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm9sdC5zdS9z/eXN0ZW0vdXBsb2Fk/cy9ob3RlbF9waG90/by9pbWFnZS8yNy8x/OC82OS80MS8wNTA1/MjAyMjA4MzA1MDAx/MC5qcGVnP3RpbWVz/dGFtcD0xNjU0ODY4/Mzcw.jpg',
    destinations: [
      { name: 'Аланья', price: 'от 37 062 ₽ / чел' },
      { name: 'Кемер', price: 'от 38 744 ₽ / чел' },
      { name: 'Сиде', price: 'от 40 540 ₽ / чел' },
    ],
  },
  {
    country: 'Египет',
    image: 'https://resize.onlinetours.ru/JTUak4RUh12Bozv2VmjPRb5CzsGZvjDxoN8pr8c20bI/rs:fill:752:327:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm9sdC5zdS9z/eXN0ZW0vdXBsb2Fk/cy9ob3RlbF9waG90/by9pbWFnZS8yNy8x/OC82OS80MS8wNTA1/MjAyMjA4MzA1MDAx/MC5qcGVnP3RpbWVz/dGFtcD0xNjU0ODY4/Mzcw.jpg',
    destinations: [
      { name: 'Шарм-эль-Шейх', price: 'от 43 735 ₽ / чел' },
      { name: 'Хургада', price: 'от 46 357 ₽ / чел' },
      { name: 'Набк Бей', price: 'от 43 735 ₽ / чел' },
    ],
  },

];

const TravelGrid = () => {
  return (
 
      <Grid container spacing={2} alignItems="center" justifyContent='center'>
        <Grid item>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        {locations.map((location, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: '16px', boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)", overflow: 'hidden' }}>
              <CardMedia
                component="img"
                alt={location.country}
                height="140"
                image={location.image}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {location.country}
                </Typography>
                {location.destinations.map((destination, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="primary">
                      {destination.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {destination.price}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item>
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
  
  );
};

export default TravelGrid;