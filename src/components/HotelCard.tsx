
import { Card, CardMedia, CardContent, Typography, Box, Rating, Button } from '@mui/material';

const HotelCard = () => {
  return (
    <Card 
      sx={{ 
        maxWidth: { xs: '100%', sm: 345 }, 
        borderRadius: '16px', 
        boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)", 
        mx: { xs: 1, sm: 'auto' } // margin x-axis: auto for small and larger screens, 1 unit for extra-small screens
      }}
    >
      <CardMedia
        component="img"
        alt="Asdem Park Hotel"
        height="140"
        image="https://resize.onlinetours.ru/JTUak4RUh12Bozv2VmjPRb5CzsGZvjDxoN8pr8c20bI/rs:fill:752:327:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm9sdC5zdS9z/eXN0ZW0vdXBsb2Fk/cy9ob3RlbF9waG90/by9pbWFnZS8yNy8x/OC82OS80MS8wNTA1/MjAyMjA4MzA1MDAx/MC5qcGVnP3RpbWVz/dGFtcD0xNjU0ODY4/Mzcw.jpg"
      />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={4} readOnly precision={0.5} size="small" />
          <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
            7.8
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          Asdem Park Hotel
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Турция, Кемер, Кемер (центр города)
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
          Туда <strong>28.05 вт</strong> - Обратно <strong>02.06 вс</strong> • Ночей <strong>5</strong>
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          От 105 222 ₽ за 2 -х
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, borderRadius: '10px' }}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default HotelCard;