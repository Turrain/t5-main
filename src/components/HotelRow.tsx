import {
  ArrowBackIos,
  ArrowForwardIos,
  Check,
  Circle,
  Favorite,
  FlightLand,
  FlightTakeoff,
  Home,
  Luggage,
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
} from "@mui/joy";

import { SetStateAction, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { ShowMoreContainer } from "./HotelInfo";
import { Rating } from "@mui/material";
import Description from "./DescriptionV1";
import React from "react";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const HotelRow = () => {
  const [activeStep, setActiveStep] = useState(0);

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
        orientation="horizontal"
        sx={{
          margin: "auto",
          boxShadow: 3,
          p: 0.5,
          px: 1,
        }}
      >
        <CardOverflow sx={{ p: 0 }}>
          <Box sx={{ position: "relative", width: 480 }}>
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
          <Typography level="h3" fontWeight={700}>
            Santana Hotel 3*
          </Typography>
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
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={1}
          >
            <Stack alignItems="left">
              <Typography level="h2">118 095</Typography>
              <Typography level="body-sm" fontWeight={100}>
                РУБ/НОМЕР
              </Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <Button variant="plain">На карте</Button>
              <Button variant="plain">Туры</Button>
              <Button variant="plain">Страница</Button>
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
      <Sheet variant="soft" sx={{ p: 1, borderRadius: 10, mb: 2 }}>
        <Card
          variant="plain"
          sx={{
            margin: "auto",
            boxShadow: 3,
            p: 1,
            m: 1,
          }}
        >
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Stack>
                <Typography level="body-sm">
                  07 июня (пт) - 15 июня (сб)
                </Typography>
                <Typography level="body-sm">8 ночей</Typography>
              </Stack>
              <Stack>
                <Typography level="body-sm">
                  AI — Завтраки, обеды, ужины + напитки
                </Typography>
                <Typography level="body-sm">
                  DBL — Superior Garden View Room
                </Typography>
              </Stack>

              <Stack direction="row" gap={2}>
                <Stack direction="column" gap={1}>
                  <Home fontSize="small" />
                  <Circle fontSize="small" sx={{ color: "orange" }} />
                </Stack>
                <Stack direction="column" gap={1}>
                  <FlightTakeoff fontSize="small" />
                  <Circle fontSize="small" sx={{ color: "orange" }} />
                </Stack>
                <Stack direction="column" gap={1}>
                  <FlightLand fontSize="small" />
                  <Circle fontSize="small" sx={{ color: "orange" }} />
                </Stack>
              </Stack>

              <Button variant="outlined">264 854 T</Button>
            </Stack>
          </CardContent>
        </Card>
        <Card
          variant="plain"
          sx={{
            margin: "auto",
            boxShadow: 3,
            p: 1,
            m: 1,
          }}
        >
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Stack>
                <Typography level="body-sm">
                  07 июня (пт) - 15 июня (сб)
                </Typography>
                <Typography level="body-sm">8 ночей</Typography>
              </Stack>
              <Stack>
                <Typography level="body-sm">
                  AI — Завтраки, обеды, ужины + напитки
                </Typography>
                <Typography level="body-sm">
                  DBL — Superior Garden View Room
                </Typography>
              </Stack>

              <Stack direction="row" gap={2}>
                <Stack direction="column" gap={1}>
                  <Home fontSize="small" />
                  <Circle fontSize="small" sx={{ color: "orange" }} />
                </Stack>
                <Stack direction="column" gap={1}>
                  <FlightTakeoff fontSize="small" />
                  <Circle fontSize="small" sx={{ color: "orange" }} />
                </Stack>
                <Stack direction="column" gap={1}>
                  <FlightLand fontSize="small" />
                  <Circle fontSize="small" sx={{ color: "orange" }} />
                </Stack>
              </Stack>

              <Button variant="outlined">264 854 T</Button>
            </Stack>
          </CardContent>
        </Card>
      </Sheet>
      <Stack>
        <Box sx={{ display: "flex", px: 4 }}>
          <Typography
            sx={{ borderRadius: "4px 4px 0 0", px: 1 }}
            color="primary"
            variant="solid"
            level="body-xs"
          >
            Дешевый
          </Typography>
        </Box>

        <Sheet
          variant="soft"
          sx={{
            p: 1,
            borderRadius: 10,
            mb: 2,
            border: "2px solid var(--joy-palette-primary-outlinedColor)",
          }}
        >
          <Stack direction="row" gap={1}>
            <Stack gap={1}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  alignItems: "center",
                  height: 80,
                }}
              >
                <Box>
                  <FlightTakeoff />
                </Box>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack justifyContent="center" gap={0.5}>
                  <Typography level="body-xs"> всего 9ч 15мин</Typography>
                  <Stack direction="row">
                    <Chip variant="soft" color="primary" size="sm">
                      SVO
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      KZN
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      AST
                    </Chip>
                  </Stack>
                  <Chip variant="solid" color="primary" size="sm">
                    Без пересадок
                  </Chip>
                </Stack>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack>
                  <Typography level="h3">Pobeda+</Typography>
                  <Typography level="body-xs"> Рейс № 6895</Typography>
                  <Typography level="body-xs"> ECONOM</Typography>
                </Stack>
                <Stack>
                  <Luggage fontSize="large" color="error" />
                  <Typography level="body-xs">Включена ручная кладь</Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  alignItems: "center",
                  height: 80,
                }}
              >
                <Box>
                  <FlightTakeoff />
                </Box>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack justifyContent="center" gap={0.5}>
                  <Typography level="body-xs"> всего 9ч 15мин</Typography>
                  <Stack direction="row">
                    <Chip variant="soft" color="primary" size="sm">
                      SVO
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      KZN
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      AST
                    </Chip>
                  </Stack>
                  <Chip variant="solid" color="primary" size="sm">
                    Без пересадок
                  </Chip>
                </Stack>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack>
                  <Typography level="h3">Pobeda+</Typography>
                  <Typography level="body-xs"> Рейс № 6895</Typography>
                  <Typography level="body-xs"> ECONOM</Typography>
                </Stack>
                <Stack>
                  <Luggage fontSize="large" color="error" />

                  <Typography level="body-xs">Включена ручная кладь</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{ flex: 1, backgroundColor: "#fff", p: 1, borderRadius: 8 }}
            >
              <Stack flex={1} direction="row" justifyContent="space-evenly">
                <Stack alignItems="flex-end">
                  <Typography level="body-md" color="primary" fontWeight={700}>
                    {" "}
                    ДОПЛАТА
                  </Typography>
                  <Typography level="h2"> 0 Р</Typography>
                </Stack>

                <Stack alignItems="flex-end">
                  <Typography level="body-md" color="primary" fontWeight={700}>
                    {" "}
                    ЦЕНА ТУРА
                  </Typography>
                  <Typography level="h2"> 300 000 Р</Typography>
                </Stack>
              </Stack>
              <Button sx={{ width: "90%", margin: "auto" }}>
                Забронировать
              </Button>
            </Stack>
          </Stack>
        </Sheet>
      </Stack>
      <Stack>
        <Box sx={{ display: "flex", px: 4 }}>
       
        </Box>

        <Sheet
          variant="soft"
          sx={{
            p: 1,
            borderRadius: 10,
            mb: 2,
           
          }}
        >
          <Stack direction="row" gap={1}>
            <Stack gap={1}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  alignItems: "center",
                  height: 80,
                }}
              >
                <Box>
                  <FlightTakeoff />
                </Box>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack justifyContent="center" gap={0.5}>
                  <Typography level="body-xs"> всего 9ч 15мин</Typography>
                  <Stack direction="row">
                    <Chip variant="soft" color="primary" size="sm">
                      SVO
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      KZN
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      AST
                    </Chip>
                  </Stack>
                  <Chip variant="solid" color="primary" size="sm">
                    Без пересадок
                  </Chip>
                </Stack>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack>
                  <Typography level="h3">Pobeda+</Typography>
                  <Typography level="body-xs"> Рейс № 6895</Typography>
                  <Typography level="body-xs"> ECONOM</Typography>
                </Stack>
                <Stack>
                  <Luggage fontSize="large" color="error" />
                  <Typography level="body-xs">Включена ручная кладь</Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  alignItems: "center",
                  height: 80,
                }}
              >
                <Box>
                  <FlightTakeoff />
                </Box>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack justifyContent="center" gap={0.5}>
                  <Typography level="body-xs"> всего 9ч 15мин</Typography>
                  <Stack direction="row">
                    <Chip variant="soft" color="primary" size="sm">
                      SVO
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      KZN
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      AST
                    </Chip>
                  </Stack>
                  <Chip variant="solid" color="primary" size="sm">
                    Без пересадок
                  </Chip>
                </Stack>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack>
                  <Typography level="h3">Pobeda+</Typography>
                  <Typography level="body-xs"> Рейс № 6895</Typography>
                  <Typography level="body-xs"> ECONOM</Typography>
                </Stack>
                <Stack>
                  <Luggage fontSize="large" color="error" />

                  <Typography level="body-xs">Включена ручная кладь</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{ flex: 1, backgroundColor: "#fff", p: 1, borderRadius: 8 }}
            >
              <Stack flex={1} direction="row" justifyContent="space-evenly">
                <Stack alignItems="flex-end">
                  <Typography level="body-md" color="primary" fontWeight={700}>
                    {" "}
                    ДОПЛАТА
                  </Typography>
                  <Typography level="h2"> 0 Р</Typography>
                </Stack>

                <Stack alignItems="flex-end">
                  <Typography level="body-md" color="primary" fontWeight={700}>
                    {" "}
                    ЦЕНА ТУРА
                  </Typography>
                  <Typography level="h2"> 300 000 Р</Typography>
                </Stack>
              </Stack>
              <Button sx={{ width: "90%", margin: "auto" }}>
                Забронировать
              </Button>
            </Stack>
          </Stack>
        </Sheet>
      </Stack>
      <Description opened={opened} setOpened={setOpened} />
    </>
  );
};
export default HotelRow;
