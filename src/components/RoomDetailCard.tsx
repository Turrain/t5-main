import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, IconButton, Stack, Typography, Chip, Button, CardOverflow } from "@mui/joy";
import { SetStateAction, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const RoomDetailCard = () => {
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
  
    return (
      <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3 }}>
         <CardOverflow sx={{p:0 }}>
        <Box sx={{ position: "relative" }}>
          <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={(step: SetStateAction<number>) => setActiveStep(step)}
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
                  backgroundColor: activeStep + 1 <= i ? "rgb(255 255 255 / 23%)" : "rgb(255 255 255 / 80%)",
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
  
        </CardOverflow>
        <CardContent>
          <Typography gutterBottom level="h4" >
            Улучшенный номер
          </Typography>
          <Typography gutterBottom level="body-xs" color="neutral">
            55 м² • 1 комната • Максимум 3 человека
          </Typography>
          <Typography level="body-sm" color="neutral" paragraph>
            Просторный номер с гостиной и спальной зонами, ванной комнатой с душем
            и ванной, есть балкон/терраса. Комплектация включает кондиционер,
            сейф, мини-бар, телевизор, телефон, фен, туалетно-косметические...
          </Typography>
          <Grid container spacing={1}>
            {amenities.map((amenity, index) => (
              <Grid  key={index}>
                <Chip size="sm"> {amenity}
                    </Chip>
              </Grid>
            ))}
          </Grid>
          <Box mt={2}>
            <Button variant="soft" color="primary" fullWidth>
              Подробнее о номере
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  };
  export default RoomDetailCard;