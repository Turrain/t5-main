import {
  ArrowBack,
  ArrowForward,
  BeachAccess,
  BorderBottom,
  BusinessCenter,
  ChildCare,
  DirectionsCar,
  Event,
  Flight,
  HealthAndSafety,
  Hotel,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LocalHospital,
  LocalLaundryService,
  LocalOffer,
  LocationCity,
  LocationOn,
  Lock,
  NightsStay,
  Pool,
  Restaurant,
  SportsSoccer,
  Star,
  TransferWithinAStation,
  Wifi,
} from "@mui/icons-material";
import { Breadcrumbs, Checkbox, Divider, Link, Modal, ModalClose, Sheet, Stack, Button, Typography, Grid, Card, CardContent } from "@mui/joy";
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MobileStepper,
  Paper,
  Rating,
  Tab,
  Tabs,
} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

import ImageGrid from "./ImageList";
import React from "react";
import PriceChart from "./PriceChart";
import RoomDetailCard from "./RoomDetailCard";
import TourFilters from "./TourFilters";
import TourCard from "./TourCard";
import HotelInfo from "./HotelInfo";
import HotelServices from "./HotelServices";
import HotelRoomCarousel from "./HotelRoomContainer";

const DateFilter = ({ dates }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="h6" gutterBottom>
      ДАТА ВЫЛЕТА
    </Typography>
    {dates.map((date, index) => (
      <Button
        key={index}
        variant={date.active ? "contained" : "outlined"}
        fullWidth
        sx={{ mb: 1 }}
      >
        {date.label} <br /> от {date.price} ₽/ночь
      </Button>
    ))}
  </Box>
);

const NightFilter = ({ nights }) => (
  <Box>
    <Typography variant="h6" gutterBottom>
      КОЛИЧЕСТВО НОЧЕЙ
    </Typography>
    {nights.map((night, index) => (
      <Button
        key={index}
        variant={night.active ? "contained" : "outlined"}
        fullWidth
        sx={{ mb: 1 }}
      >
        {night.label} <br /> от {night.price} ₽
      </Button>
    ))}
  </Box>
);

const RoomCard = ({ room }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography variant="h5" component="div">
            {room.startDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {room.duration} ночей
          </Typography>
          <Typography variant="h5" component="div">
            {room.endDate}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="div">
            {room.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {room.description}
          </Typography>
          <Button variant="text" color="primary">
            Подробнее о номере →
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body2" color="text.secondary" align="right">
            {room.company}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="right">
            {room.pricePerNight} ₽/ночь
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            от {room.totalPrice} ₽
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const RoomList = () => {
  const dates = [
    { label: "29 май, ср", price: "23 751", active: true },
    { label: "30 май, чт", price: "27 322", active: false },
    // ... add more dates as needed
  ];

  const nights = [
    { label: "7 ночей", price: "166 257", active: true },
    { label: "8 ночей", price: "194 680", active: false },
  ];

  const rooms = [
    {
      startDate: "29 май, ср",
      duration: "7",
      endDate: "5 июн, ср",
      title: "Улучшенный номер",
      description: "Все включено, AI",
      company: "Let's Fly",
      pricePerNight: "23 751",
      totalPrice: "166 257",
    },
    // ... add more rooms as needed
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <DateFilter dates={dates} />
        <NightFilter nights={nights} />
      </Grid>
      <Grid item xs={9}>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </Grid>
    </Grid>
  );
};

const HotelRating = () => {
  return (
    <Box sx={{ padding: 1 }}>
      <Box display="flex" alignItems="center">
        <Rating value={5} readOnly />
        <Typography variant="h6" component="div" sx={{ ml: 1 }}>
          Отель Tamra Beach Resort
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt={1}>
        <LocationOn fontSize="small" />
        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
          Набк Бей, Египет
        </Typography>
        <Chip
          label="Очень популярный"
          color="primary"
          size="small"
          sx={{ ml: 1 }}
        />
        <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
          <Chip
            icon={<Star />}
            label="9.1"
            color="success"
            size="small"
            sx={{ ml: 1 }}
          />
          <Typography fontSize={10}>193 оценки</Typography>
        </Stack>
      </Box>
      <Box display="flex" alignItems="center" mt={1}></Box>
    </Box>
  );
};

export default function Description() {
  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={true}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack direction='row' sx={{position:'relative'}} gap={2}>
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 1024,
            maxHeight: '100vh',
            borderRadius: "md",
            p: 1,
            boxShadow: "lg",
            overflow: 'auto'
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />

          <HotelRating />
          <ImageGrid />

          <Box sx={{ flexGrow: 1, padding: 2,  }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box>
                <Typography level="title-md" textColor="text.secondary">
                  Обычно в номере
                </Typography>
                <Typography level="body-sm">
                  Сейф, кондиционер, терраса, фен, телевизор, мини-бар, телефон,
                  душ
                </Typography>
              </Box>
              <Box>
                <Typography level="title-md" textColor="text.secondary">
                  Как можно питаться в отеле
                </Typography>
                <Typography level="body-sm">
                  Диетическое меню, ресторан, бар, шведский стол, бар у бассейна
                </Typography>
              </Box>
            </Box>
           
          </Box>
          <Grid container spacing={2} sx={{backgroundColor: '#F3F9FF'}}>
            <Grid xs={3}>
            <TourFilters/>
            </Grid>
            <Grid xs={9}>
              <Stack gap={2}>
              <TourCard/>
              <TourCard/>
              <TourCard/>
              <TourCard/>
              <TourCard/>
              </Stack>
             
              
            </Grid>
          </Grid>
          <HotelRoomCarousel />
          <Stack direction='row' sx={{mt:2}} gap={1}>
            <RoomDetailCard />
            <RoomDetailCard />
            <RoomDetailCard />
          </Stack>
          <HotelInfo />
          <HotelServices />
        </Sheet>
        <Sheet   variant="outlined"
          sx={{
            margin: 'auto',
            maxWidth: 1024,
         
            borderRadius: "md",
            p: 1,
            boxShadow: "lg",
            overflow: 'auto'
          }}>
           <Tabs
              value={0}
              indicatorColor="primary"
              textColor="primary"
              centered
              orientation="vertical"
            >
              <Tab label="ТУРЫ" />
              <Tab label="НОМЕРА" />
              <Tab label="УСЛУГИ" />
              <Tab label="НА КАРТЕ" />
              <Tab label="ОТЗЫВЫ" />
            </Tabs>
        </Sheet>
        </Stack>
        
      </Modal>
    </>
  );
}
