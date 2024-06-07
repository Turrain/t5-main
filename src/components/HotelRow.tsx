import {
  ArrowBackIos,
  ArrowForwardIos,
  CalendarToday,
  Check,
  Circle,
  Close,
  Favorite,
  FlightLand,
  FlightTakeoff,
  Home,
  Hotel,
  Luggage,
  NightsStay,
  Restaurant,
  Wifi,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stack,
  Typography,
  Chip,
  Button,
  CardOverflow,
  Sheet,
  Divider,
  Badge,
  Modal,
  Drawer,
} from "@mui/joy";
import { styled } from "@mui/system";
import { SetStateAction, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { ShowMoreContainer } from "./HotelInfo";
import { Rating, useMediaQuery } from "@mui/material";
import Description from "./DescriptionV1";
import React from "react";
import MapComponent from "./MapComponen";
import HotelTours from "./HotelTours";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import { DraggableCore } from 'react-draggable';

const YourComponent = () => {
  const [open, setOpen] = useState(true); // Control modal state
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [drawerHeight, setDrawerHeight] = useState(window.innerHeight * 0.6);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleDrag = (e, data) => {
    let clientY;
    if (e.type === 'touchmove') {
      clientY = e.touches[0].clientY;
    } else {
      clientY = e.clientY;
    }
    const newHeight = window.innerHeight - clientY;
    setDrawerHeight(newHeight)
  };
  return (
    <>
      {open &&
        (isSmallScreen ? (
          <Drawer
            anchor="bottom"
            open={open}
            onClose={handleClose}
            sx={{
              "& > .MuiDrawer-content": {
                borderRadius: "18px",
                height: drawerHeight,
                transition: '1s all '
              },
              maxHeight: "90dvh",
              "--Drawer-transitionDuration": open ? "0.4s" : "0.2s",
              "--Drawer-transitionFunction": open
                ? "cubic-bezier(0.79,0.14,0.15,0.86)"
                : "cubic-bezier(0.77,0,0.18,1)",
            }}
          >
              <DraggableCore  onDrag={handleDrag}>
            <ModalHeader>
          
                <Puller />
           
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
              <Typography id="iphone-drawer-title" level="h3">
                Tours
              </Typography>
            </ModalHeader>
            </DraggableCore >
            <ModalContent
              sx={{
                overflow: "auto",
                maxHeight: "100%",
              
              }}
            >
              <HotelRowTours />
              <HotelRowTours />
              <HotelRowTours />
              <HotelRowTours />
            </ModalContent>
          </Drawer>
        ) : (
          <Sheet
            variant="soft"
            sx={{
              p: 1,
              borderRadius: 10,
              mb: 2,
              display: "flex",
              gap: 1,
              flexDirection: "column",
            }}
          >
            <HotelRowTours />
            <HotelRowTours />
            <HotelRowTours />
            <HotelRowTours />
          </Sheet>
        ))}
     
    </>
  );
};
const Puller = styled("div")(({ theme }) => ({
  width: 60,
  height: 6,
  backgroundColor: "#ddd",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% -  30px)",
}));
const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 600,
  backgroundColor: theme.palette.background,
  borderRadius: "16px 16px 0 0",

  padding: theme.spacing(2, 2, 2),
  display: "flex",
  flexDirection: "column",
  outline: "none",
}));

const ModalHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #ddd",
  paddingBottom: "8px",
  marginBottom: "16px",
});

const ModalContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const HotelRowTours = () => {
  return (
    <Card
      variant="plain"
      sx={{
        margin: "auto",
        boxShadow: 3,
        p: 1,
        width: "100%",
      }}
    >
      <CardContent>
        <Stack
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
          gap={1}
          justifyContent="space-between"
        >
          <Stack>
            <Typography level="body-xs">07 июня (пт) - 15 июня (сб)</Typography>
            <Typography level="body-xs"> 8 ночей</Typography>
          </Stack>
          <Stack>
            <Typography level="body-xs">
              AI — Завтраки, обеды, ужины + напитки
            </Typography>
            <Typography level="body-xs">
              DBL — Superior Garden View Room
            </Typography>
          </Stack>

          <Stack direction="row" gap={2}>
            <Stack direction="column" alignItems="center" gap={0.5}>
              <Home fontSize="small" />
              <Circle sx={{ color: "orange", fontSize: 12 }} />
            </Stack>
            <Stack direction="column" alignItems="center" gap={0.5}>
              <FlightTakeoff fontSize="small" />
              <Circle sx={{ color: "orange", fontSize: 12 }} />
            </Stack>
            <Stack direction="column" alignItems="center" gap={0.5}>
              <FlightLand fontSize="small" />
              <Circle sx={{ color: "orange", fontSize: 12 }} />
            </Stack>
          </Stack>

          <Button variant="soft">264 854 T</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

const HotelRow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showTours, setShowTours] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const images = [
    "https://hotels-room.sletat.ru/room_photos/hotel_41003/room_11c065b9-6a30-466a-ac33-1c00bd199241.jpg?height=300&width=400",
    "https://hotels-room.sletat.ru/room_photos/hotel_41003/room_418a3bb2-9d4d-48d4-9375-d96979137cb4.jpg?height=300&width=400",
    "https://hotels-room.sletat.ru/room_photos/hotel_41003/room_7d8d9a3b-3f7c-40e9-bd10-68c3bdd79496.jpg?height=300&width=400",
    "https://hotels-room.sletat.ru/room_photos/hotel_41003/room_f471cb33-bd39-4b19-8ca2-9d34279fb086.jpg?height=300&width=400",
    "https://hotels-room.sletat.ru/room_photos/hotel_41003/room_7d8d9a3b-3f7c-40e9-bd10-68c3bdd79496.jpg?height=300&width=400",
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
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Card
        variant="plain"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          margin: "auto",
          boxShadow: 3,
          p: 0.5,
          px: 1,
        }}
      >
        <CardOverflow sx={{ p: 0 }}>
          <Box sx={{ position: "relative" }}>
            <AutoPlaySwipeableViews
              axis="x"
              index={activeStep}
              onChangeIndex={(step: SetStateAction<number>) =>
                setActiveStep(step)
              }
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
                    borderRadius: 10,
                  }}
                ></Box>
              ))}
            </AutoPlaySwipeableViews>
            <IconButton
              sx={{ position: "absolute", top: "45%", left: "1rem" }}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <ArrowBackIos />
            </IconButton>

            <Stack
              direction="row"
              sx={{
                position: "absolute",
                bottom: "1rem",
                width: "100%",
                gap: 1,
                px: 1,
              }}
            >
              {images.map((e, i) => (
                <div
                  style={{
                    height: 5,
                    borderRadius: 5,
                    width: `calc(100%/${maxSteps})`,
                    backgroundColor:
                      activeStep + 1 <= i
                        ? "rgb(255 255 255 / 23%)"
                        : "rgb(255 255 255 / 80%)",
                  }}
                ></div>
              ))}
            </Stack>
            <IconButton
              sx={{ position: "absolute", top: "45%", right: "1rem" }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>
        </CardOverflow>
        <CardContent>
          <Rating value={3} size="small" readOnly></Rating>
          <Stack direction="row" sx={{ width: "100%" }}>
            <Typography level="h3" fontWeight={700} flex="1">
              Santana Hotel 3*
            </Typography>
            <Chip color="primary" sx={{ width: "110px" }}>
              <Chip variant="solid" color="primary" sx={{ mr: 1 }}>
                9.8
              </Chip>
              999 отзывов
            </Chip>
          </Stack>

          <Typography gutterBottom level="body-sm">
            Бельдиби, Кемер, 500 м до моря
          </Typography>
          <ShowMoreContainer maxHeight={18}>
            <Typography level="body-md" color="neutral">
              Просторный номер с гостиной и спальной зонами, ванной комнатой с
              душем и ванной, есть балкон/терраса. Комплектация включает
              кондиционер, сейф, мини-бар, телевизор, телефон, фен,
              туалетно-косметические...
            </Typography>
          </ShowMoreContainer>
          <Stack
            alignItems="center"
            sx={{
              justifyContent: { xs: "unset", sm: "space-between" },
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
            p={1}
          >
            <Stack alignItems="left">
              <Typography level="h2">118 095</Typography>
              <Typography level="body-sm" fontWeight={100}>
                РУБ/НОМЕР
              </Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <Button
                variant="plain"
                sx={{
                  backgroundColor: showMap
                    ? "var(--joy-palette-primary-plainHoverBg)"
                    : "",
                }}
                onClick={() => setShowMap((prev) => !prev)}
              >
                На карте
              </Button>
              <Badge badgeContent={99} size="sm">
                <Button
                  variant="plain"
                  sx={{
                    backgroundColor: showTours
                      ? "var(--joy-palette-primary-plainHoverBg)"
                      : "",
                  }}
                  onClick={() => setShowTours((prev) => !prev)}
                >
                  Туры
                </Button>
              </Badge>
              <Button
                variant="plain"
                sx={{
                  backgroundColor: showPage
                    ? "var(--joy-palette-primary-plainHoverBg)"
                    : "",
                }}
                onClick={() => setShowPage((prev) => !prev)}
              >
                Страница
              </Button>
            </Stack>
            <Stack direction="row" gap={2}>
              <IconButton
                sx={{ borderRadius: "99px", width: 20, height: 20 }}
                variant="soft"
                color="primary"
              >
                <Favorite />
              </IconButton>
              <IconButton
                sx={{ borderRadius: "99px", width: 20, height: 20 }}
                variant="soft"
                color="primary"
                onClick={() => {
                  setOpened(true);
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      {showTours && <YourComponent />}
      {showMap && (
        <Sheet variant="soft" sx={{ p: 1, borderRadius: 10, mb: 2 }}>
          <MapComponent />
        </Sheet>
      )}
      {showPage && (
        <Sheet variant="soft" sx={{ p: 1, borderRadius: 10, mb: 2 }}>
          <HotelTours />
        </Sheet>
      )}

      <Description opened={opened} setOpened={setOpened} />
    </>
  );
};
export default HotelRow;
