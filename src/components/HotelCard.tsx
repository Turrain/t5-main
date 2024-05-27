
import { Card, CardMedia, CardContent, Typography, Box, Rating, Button } from '@mui/material';
import { useStyles } from '../main';
import React, { useEffect } from 'react';
import fetchToursData from './api/fecthTours';

const HotelCard = () => {
const [tours, setTours] = React.useState({});

useEffect(() => {
  fetchToursData().then(e => setTours(e));
}, [])

  const styles = useStyles()
  return (
    <Card 
      sx={{ 
        ...styles.card,
        maxWidth: { xs: '100%', sm: 345 }, 
        borderRadius: '16px', 
        boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)", 
        mx: { xs: 1, sm: 'auto' } // margin x-axis: auto for small and larger screens, 1 unit for extra-small screens
      }}
    >
      <CardMedia
        component="img"
        alt={tours?.GetToursResult?.Data.aaData[0][7]}
        height="140"
        image={tours?.GetToursResult?.Data.aaData[0][34]}
      />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={tours?.GetToursResult?.Data.aaData[0][35]} readOnly precision={0.5} size="small" />
          <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
            {tours?.GetToursResult?.Data.aaData[0][35]}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          {tours?.GetToursResult?.Data.aaData[0][7]}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {tours?.GetToursResult?.Data.aaData[0][31]}, {tours?.GetToursResult?.Data.aaData[0][19]}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1, mb: 1 }}>
          <Typography variant="caption" sx={{ mr: 1, border: '1px solid', borderRadius: '4px', padding: '2px 4px' }}>
            1 линия
          </Typography>
          <Typography variant="caption" sx={{ mr: 1, border: '1px solid', borderRadius: '4px', padding: '2px 4px' }}>
            галечный
          </Typography>
          <Typography variant="caption" sx={{ border: '1px solid', borderRadius: '4px', padding: '2px 4px' }}>
            оборудованный
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          Туда <strong>{tours?.GetToursResult?.Data.aaData[0][12]}</strong> - Обратно <strong>{tours?.GetToursResult?.Data.aaData[0][13]}</strong> • Ночей <strong>{tours?.GetToursResult?.Data.aaData[0][14]}</strong>
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          От {tours?.GetToursResult?.Data.aaData[0][15]} за {tours?.GetToursResult?.Data.aaData[0][16]} -х
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, borderRadius: '10px' }}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default HotelCard;