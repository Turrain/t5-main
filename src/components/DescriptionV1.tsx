import {
  ArrowBack,
  ArrowBackIos,
  ArrowForward,
  ArrowForwardIos,
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
  Pool,
  Restaurant,
  SportsSoccer,
  Star,
  TransferWithinAStation,
  Wifi,
} from "@mui/icons-material";
import {
  Breadcrumbs,
  IconButton,
  Link,
  Modal,
  ModalClose,
  Sheet,
  Stack,
} from "@mui/joy";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MobileStepper,
  Paper,
  Rating,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

import ImageGrid from "./ImageList";
import React from "react";
import PriceChart from "./PriceChart";

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
const RoomDetailCard = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
  ];
  const maxSteps = images.length;
  const amenities = [
    "Ванна",
    "Душ",
    "Кондиционер",
    "Мини-бар",
    "Стиральная машина",
    "Телевизор",
    "Телефон",
  ];

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3 }}>
      <Box sx={{ position: "relative" }}>
        <AutoPlaySwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={(step) => setActiveStep(step)}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <Box
              key={index}
              component="div"
              sx={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${step})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          ))}
        </AutoPlaySwipeableViews>
        <IconButton
          sx={{ position: "absolute", top: "45%", left: "1rem" }}
          onClick={handleBack} disabled={activeStep === 0}
        ><ArrowBackIos  /></IconButton>
        
        <Stack
          direction="row"
          sx={{ position: "absolute", bottom: "1rem", width: "100%", gap: 1, px:1 }}
        >
          {images.map((e, i) => (
            <div
              style={{
                height: 5,
                borderRadius: 5,
                width: `calc(100%/${maxSteps})`,
                backgroundColor: activeStep + 1 <= i ? "#ddd" : "#fff",
              }}
            ></div>
          ))}
        </Stack>
        <IconButton
          sx={{ position: "absolute", top: "45%", right: "1rem" }}
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        ><ArrowForwardIos  /></IconButton>

      
      </Box>

   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Улучшенный номер
        </Typography>
        <Typography variant="body2" color="text.secondary">
          55 м² • 1 комната • Максимум 3 человека
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Просторный номер с гостиной и спальной зонами, ванной комнатой с душем
          и ванной, есть балкон/терраса. Комплектация включает кондиционер,
          сейф, мини-бар, телевизор, телефон, фен, туалетно-косметические...
        </Typography>
        <Grid container spacing={1}>
          {amenities.map((amenity, index) => (
            <Grid item key={index}>
              <Chip label={amenity} />
            </Grid>
          ))}
        </Grid>
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            Подробнее о номере
          </Button>
        </Box>
      </CardContent>
    </Card>
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
          Отель Tamra Beach Resort расположен в 7 км от аэропорта
          Шарм-Эль-Шейха, в бухте Набк Бей.
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
    category: "Питание:",
    icon: <Restaurant />,
    items: [
      "Диетическое меню",
      "Ресторан",
      "Бар",
      "Шведский стол",
      "Бар у бассейна",
    ],
  },
  {
    category: "Пляж:",
    icon: <BeachAccess />,
    items: ["Частный пляж", "1-ая пляжная линия", "Песок жёлтый", "Галька"],
  },
  {
    category: "Удобства в номерах:",
    icon: <Hotel />,
    items: [
      "Сейф",
      "Кондиционер",
      "Терраса",
      "Фен",
      "Телевизор",
      "Мини-бар",
      "Телефон",
      "Душ",
    ],
  },
  {
    category: "Интернет:",
    icon: <Wifi />,
    items: ["Wi-Fi"],
  },
  {
    category: "Спорт:",
    icon: <SportsSoccer />,
    items: ["Настольный теннис", "Волейбол", "Футбол", "Групповые занятия"],
  },
  {
    category: "Бассейн:",
    icon: <Pool />,
    items: ["Крытый бассейн", "Открытый бассейн", "Бассейн с подогревом"],
  },
  {
    category: "Услуги для детей:",
    icon: <ChildCare />,
    items: ["Детская площадка", "Детский клуб", "Детский бассейн"],
  },
  {
    category: "Здоровье и красота:",
    icon: <HealthAndSafety />,
    items: [
      "Массаж",
      "Сауна",
      "Спа и оздоровительный центр",
      "Паровая баня",
      "Гидромассажная ванна",
      "Салон красоты",
      "Кабинет врача",
    ],
  },
  {
    category: "Транспорт:",
    icon: <DirectionsCar />,
    items: ["Трансфер", "Аренда лимузина"],
  },
  {
    category: "Бизнес-услуги:",
    icon: <BusinessCenter />,
    items: ["Конференц-зал"],
  },
  {
    category: "Услуги по чистке одежды:",
    icon: <LocalLaundryService />,
    items: ["Прачечная"],
  },
  {
    category: "Общие услуги:",
    icon: <LocalOffer />,
    items: ["Банкомат", "Сад", "Магазины в отеле", "Банкетный зал"],
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
            maxHeight: "100vh",
            borderRadius: "md",
            p: 1,
            boxShadow: "lg",
            overflow: "auto",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />

          <HotelRating />
          <ImageGrid />

          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box>
                <Typography variant="subtitle1" color="textSecondary">
                  Обычно в номере
                </Typography>
                <Typography variant="body2">
                  Сейф, кондиционер, терраса, фен, телевизор, мини-бар, телефон,
                  душ
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="textSecondary">
                  Как можно питаться в отеле
                </Typography>
                <Typography variant="body2">
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

          <Card
            sx={{
              display: "flex",
              padding: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={1}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="h4">29</Typography>
                  <Typography variant="body2">май, ср</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={1}>
                <Stack>
                  <Typography
                    variant="body2"
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
              <Grid item xs={12} md={1}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="h4">5</Typography>
                  <Typography variant="body2">июн, ср</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6">Улучшенный номер</Typography>
                  <Typography variant="body2">Все включено, AI</Typography>
                  <Link> Подробнее о номере →</Link>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Typography variant="body2" color="textSecondary">
                    Let's Fly
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    24 536 ₽/ночь
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#fff8e1",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      border: "1px solid #ffd700",
                    }}
                  >
                    <Typography variant="h6" color="primary">
                      от 171 747 ₽
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Stack direction="row" gap={1}>
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
