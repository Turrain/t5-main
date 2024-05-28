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


const HotelInfo = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Об отеле Tamra Beach Resort
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Box textAlign="center">
            <BeachAccess fontSize="large" color="primary" />
            <Typography>1-ая пляжная линия</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box textAlign="center">
            <Wifi fontSize="large" color="primary" />
            <Typography>Wi-Fi</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box textAlign="center">
            <TransferWithinAStation fontSize="large" color="primary" />
            <Typography>Трансфер</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box textAlign="center">
            <ChildCare fontSize="large" color="primary" />
            <Typography>Детский бассейн</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box textAlign="center">
            <LocalHospital fontSize="large" color="primary" />
            <Typography>Кабинет врача</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box textAlign="center">
            <Lock fontSize="large" color="primary" />
            <Typography>Сейф</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Расположение отеля
        </Typography>
        <Typography variant="body1" gutterBottom>
          Отель Tamra Beach Resort расположен в 7 км от аэропорта Шарм-Эль-Шейха, в бухте Набк Бей.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Номерной фонд гостиницы Tamra Beach Resort
        </Typography>
        <Typography variant="body1" gutterBottom>
          Для размещения предлагается 305 номеров. Во всех номерах есть:
        </Typography>
      </Box>
      <Typography variant="body2" color="primary">
        Подробнее
      </Typography>
    </Box>
  );
};


const services = [
  {
    category: 'Питание:',
    icon: <Restaurant />,
    items: ['Диетическое меню', 'Ресторан', 'Бар', 'Шведский стол', 'Бар у бассейна'],
  },
  {
    category: 'Пляж:',
    icon: <BeachAccess />,
    items: ['Частный пляж', '1-ая пляжная линия', 'Песок жёлтый', 'Галька'],
  },
  {
    category: 'Удобства в номерах:',
    icon: <Hotel />,
    items: ['Сейф', 'Кондиционер', 'Терраса', 'Фен', 'Телевизор', 'Мини-бар', 'Телефон', 'Душ'],
  },
  {
    category: 'Интернет:',
    icon: <Wifi />,
    items: ['Wi-Fi'],
  },
  {
    category: 'Спорт:',
    icon: <SportsSoccer />,
    items: ['Настольный теннис', 'Волейбол', 'Футбол', 'Групповые занятия'],
  },
  {
    category: 'Бассейн:',
    icon: <Pool />,
    items: ['Крытый бассейн', 'Открытый бассейн', 'Бассейн с подогревом'],
  },
  {
    category: 'Услуги для детей:',
    icon: <ChildCare />,
    items: ['Детская площадка', 'Детский клуб', 'Детский бассейн'],
  },
  {
    category: 'Здоровье и красота:',
    icon: <HealthAndSafety />,
    items: ['Массаж', 'Сауна', 'Спа и оздоровительный центр', 'Паровая баня', 'Гидромассажная ванна', 'Салон красоты', 'Кабинет врача'],
  },
  {
    category: 'Транспорт:',
    icon: <DirectionsCar />,
    items: ['Трансфер', 'Аренда лимузина'],
  },
  {
    category: 'Бизнес-услуги:',
    icon: <BusinessCenter />,
    items: ['Конференц-зал'],
  },
  {
    category: 'Услуги по чистке одежды:',
    icon: <LocalLaundryService />,
    items: ['Прачечная'],
  },
  {
    category: 'Общие услуги:',
    icon: <LocalOffer />,
    items: ['Банкомат', 'Сад', 'Магазины в отеле', 'Банкетный зал'],
  },
];

const HotelServices = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Все услуги отеля
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="h6" gutterBottom>
              {service.icon} {service.category}
            </Typography>
            <List>
              {service.items.map((item, idx) => (
                <ListItem key={idx} disableGutters>

                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
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

          <Box sx={{ flexGrow: 1, padding: 2 }}>
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
            <Tabs
              value={0}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="ТУРЫ" />
              <Tab label="НОМЕРА" />
              <Tab label="УСЛУГИ" />
              <Tab label="НА КАРТЕ" />
              <Tab label="ОТЗЫВЫ" />
            </Tabs>
          </Box>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card
                sx={{
                  display: 'flex',
                  padding: 2,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 35px 0 rgba(5,16,54,.102)',
                  border: 0
                }}
              >
                <Stack
                  direction="column"
                  spacing={1}
                  width="100%"
                >
                  <Typography level="title-md">Фильтры</Typography>
                  <Divider />
                  <Typography level="body-md">Дата заселения</Typography>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    rowGap="6px"
                  >
                    <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
                      <Button
                        variant="outlined"
                        sx={{
                          p: 0.3
                        }}
                      >
                        <Stack direction='column'>
                          <Typography level="body-xs" fontSize='12px'>
                            15 июн, сб
                          </Typography>
                          <Typography level="body-xs" fontSize='10px'>
                            от 135 089 Р
                          </Typography>
                          <Typography level="body-xs" fontSize='10px'>
                            от 19 299 Р/ночь
                          </Typography>
                        </Stack>
                      </Button>
                    </Grid>
                    <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
                      <Button
                        variant="outlined"
                        sx={{
                          p: 0.3
                        }}
                      >
                        <Stack direction='column'>
                          <Typography level="body-xs" fontSize='12px'>
                            15 июн, сб
                          </Typography>
                          <Typography level="body-xs" fontSize='10px'>
                            от 135 089 Р
                          </Typography>
                          <Typography level="body-xs" fontSize='10px'>
                            от 19 299 Р/ночь
                          </Typography>
                        </Stack>
                      </Button>
                    </Grid>
                    <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
                      <Button
                        variant="outlined"
                        sx={{
                          p: 0.3
                        }}
                      >
                        <Stack direction='column'>
                          <Typography level="body-xs" fontSize='12px'>
                            15 июн, сб
                          </Typography>
                          <Typography level="body-xs" fontSize='10px'>
                            от 135 089 Р
                          </Typography>
                          <Typography level="body-xs" fontSize='10px'>
                            от 192 299 Р/ночь
                          </Typography>
                        </Stack>
                      </Button>
                    </Grid>
                  </Grid>

                  <Divider />

                  <Typography level="body-md">Количество ночей</Typography>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
                      <Button
                        variant="outlined"
                        sx={{
                          p: 0.5
                        }}
                      >
                        <Stack direction='column'>
                          <Stack direction="row" spacing={1}>
                            <NightsStay fontSize="8" />
                            <Typography level="title-sm" fontSize='12px'>
                              7 ночей
                            </Typography>
                          </Stack>
                          <Typography level="body-xs" fontSize='10px'>
                            от 192 299 Р/ночь
                          </Typography>
                        </Stack>
                      </Button>
                    </Grid>
                    <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
                      <Button
                        variant="outlined"
                        sx={{
                          p: 0.5
                        }}
                      >
                        <Stack direction='column'>
                          <Stack direction="row" spacing={1}>
                            <NightsStay fontSize="8" />
                            <Typography level="title-sm" fontSize='12px'>
                              8 ночей
                            </Typography>
                          </Stack>
                          <Typography level="body-xs" fontSize='10px'>
                            от 192 299 Р/ночь
                          </Typography>
                        </Stack>
                      </Button>
                    </Grid>
                  </Grid>

                  <Divider />

                  <Typography level="body-md">Тип номера</Typography>
                  <Stack>
                    <Checkbox label='Улучшенный номер' size="sm" />
                    <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
                  </Stack>
                  <Stack>
                    <Checkbox label='Улучшенный номер с видом на бассейн' size="sm" />
                    <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
                  </Stack>
                  <Stack>
                    <Checkbox label='Улучшенный номер с видом на море' size="sm" />
                    <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
                  </Stack>
                  <Stack>
                    <Checkbox label='Семейный номер' size="sm" />
                    <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
                  </Stack>
                  <Stack>
                    <Checkbox label='Полулюкс' size="sm" />
                    <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
                  </Stack>
                  <Stack>
                    <Checkbox label='Sea View' size="sm" />
                    <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
                  </Stack>

                  <Divider />

                  <Stack>
                    <Checkbox label='Туры с онлайн-оплатой' size="sm" />
                    <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
                  </Stack>

                  <Divider />

                  <Typography level="body-md">Туроператор</Typography>
                </Stack>
              </Card>
            </Grid>
            <Grid xs={9}>
              <Card
                sx={{
                  display: "flex",
                  padding: 2,
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: '0 10px 35px 0 rgba(5,16,54,.102)',
                  border: 0
                }}
              >
                <Grid container spacing={2} alignItems="center" width="100%" flexGrow="1">
                  <Grid xs={12} md={2}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Typography level="h1">29</Typography>
                      <Typography level="body-sm">май, ср</Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} md={1}>
                    <Stack>
                      <Typography
                        level="body-sm"
                        textAlign="center"
                        sx={{ textWrap: "nowrap" }}
                      >
                        7 ночей
                      </Typography>

                      <Box
                        sx={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <ArrowBack fontSize="8" />

                        <ArrowForward fontSize="8" />
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid xs={12} md={2}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Typography level="h1">5</Typography>
                      <Typography level="body-sm">июн, ср</Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} md={4}>
                    <Box display="flex" flexDirection="column">
                      <Typography level="h3">Улучшенный номер</Typography>
                      <Typography level="body-sm">Все включено, AI</Typography>
                      <Link> Подробнее о номере →</Link>
                    </Box>
                  </Grid>
                  <Grid xs={12} md={3}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                    >
                      <Typography level="body-md" textColor="text.secondary">
                        Let's Fly
                      </Typography>
                      <Typography level="body-md" textColor="text.secondary">
                        24 536 ₽/ночь
                      </Typography>
                      <Box
                        sx={{
                          padding: "8px 16px",
                        }}
                      >
                        <Typography level="title-lg" color="primary">
                          от 171 747 ₽
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Stack direction='row' sx={{mt:2}} gap={1}>
            <RoomDetailCard />
            <RoomDetailCard />
            <RoomDetailCard />
          </Stack>
          <HotelInfo />
          <HotelServices />
        </Sheet>
      </Modal>
    </>
  );
}
