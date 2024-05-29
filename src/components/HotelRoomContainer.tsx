// // src/components/HotelRoomCarousel.js

// import { createStyles } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
// import React, { useState } from 'react';


// const useStyles = makeStyles((theme) => createStyles({
//   carouselContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//     width: '100%',
//     position: 'relative',
//   },
//   carouselItem: {
//     flex: '0 0 60%',
//     transition: 'transform 0.5s ease',
//     margin: theme.spacing(2),
//     position: 'relative',
//     zIndex: 1,
//   },
//   smallCarouselItem: {
//     flex: '0 0 30%',
//     transition: 'transform 0.5s ease',
//     opacity: 0.5,
//     margin: theme.spacing(2),
//     position: 'relative',
//     zIndex: 0,
//   },
//   image: {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: 8,
//   },
//   info: {
//     padding: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
//   navButton: {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     zIndex: 2,
//   },
//   navButtonLeft: {
//     left: 0,
//   },
//   navButtonRight: {
//     right: 0,
//   },
// }));

// const HotelRoomCarousel = () => {
//   const classes = useStyles();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const rooms = [
//     {
//       id: 1,
//       imageUrl: 'https://via.placeholder.com/400',
//       title: 'Улучшенный номер',
//       size: '55 м²',
//       roomCount: '1 комната',
//       maxPeople: 'Максимум 3 человека',
//       description: 'Просторный номер с гостиной и спальней',
//       features: ['Ванна', 'Душ', 'Кондиционер', 'Мини-бар', 'Стиральная машина', 'Телевизор', 'Телефон'],
//     },
//     {
//       id: 2,
//       imageUrl: 'https://via.placeholder.com/400',
//       title: 'Стандартный номер',
//       size: '45 м²',
//       roomCount: '1 комната',
//       maxPeople: 'Максимум 2 человека',
//       description: 'Уютный номер с одной спальней',
//       features: ['Душ', 'Кондиционер', 'Мини-бар', 'Телевизор', 'Телефон'],
//     },
//     {
//       id: 3,
//       imageUrl: 'https://via.placeholder.com/400',
//       title: 'Люкс',
//       size: '75 м²',
//       roomCount: '2 комнаты',
//       maxPeople: 'Максимум 4 человека',
//       description: 'Роскошный номер с гостиной и спальней',
//       features: ['Ванна', 'Душ', 'Кондиционер', 'Мини-бар', 'Стиральная машина', 'Телевизор', 'Телефон'],
//     },
//   ];

//   const next = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
//   };

//   return (
//     <Box className={classes.carouselContainer}>
//       <Button className={`${classes.navButton} ${classes.navButtonLeft}`} onClick={prev}>
//         {'<'}
//       </Button>
//       {rooms.map((room, index) => {
//         const isCurrent = index === currentIndex;
//         const isPrev = index === (currentIndex - 1 + rooms.length) % rooms.length;
//         const isNext = index === (currentIndex + 1) % rooms.length;
//         const itemClass = isCurrent
//           ? classes.carouselItem
//           : isPrev || isNext
//           ? classes.smallCarouselItem
//           : classes.smallCarouselItem;

//         return (
//           <Paper key={room.id} className={itemClass} style={{ transform: isCurrent ? 'scale(1)' : 'scale(0.8)' }}>
//             <Grid container>
//               <Grid item xs={12}>
//                 <img src={room.imageUrl} alt={room.title} className={classes.image} />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box className={classes.info}>
//                   <Typography variant="h6">{room.title}</Typography>
//                   <Typography variant="body2">
//                     {room.size} • {room.roomCount} • {room.maxPeople}
//                   </Typography>
//                   <Typography variant="body2">{room.description}</Typography>
//                   <Box>
//                     {room.features.map((feature, idx) => (
//                       <Button variant="outlined" size="small" key={idx} style={{ margin: '2px' }}>
//                         {feature}
//                       </Button>
//                     ))}
//                   </Box>
//                   <Button variant="contained" color="primary" className={classes.button}>
//                     Подробнее о номере
//                   </Button>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Paper>
//         );
//       })}
//       <Button className={`${classes.navButton} ${classes.navButtonRight}`} onClick={next}>
//         {'>'}
//       </Button>
//     </Box>
//   );
// };

// export default HotelRoomCarousel;