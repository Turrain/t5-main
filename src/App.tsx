import * as React from "react";
import Stack from "@mui/material/Stack";
import { Box, Container, Divider } from "@mui/material";

import { CountrySelectV3 } from "./components/CountrySelectV3";
import { CitySelectV3 } from "./components/CitySelectV3";
import { Trigger3 } from "./components/NightsDropdown";
import {
  AspectRatio,
  Avatar,
  Button,
  Card,
  CardCover,
  Chip,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import DrawerFilters from "./components/Drawer";
import { Trigger2 } from "./components/CalendarV2";
import { Trigger4 } from "./components/ChildsDropdownV2";
import { MealTypesDropdown } from "./components/MealTypesDropdown";
import { Trgger5 } from "./components/HotelSelectV2";
import data from "./components/api/tours.json";
import { CreateNewFolder, Favorite, Visibility } from "@mui/icons-material";
import HotelCard from "./components/HotelCard";
import HotelGrid from "./components/HotelGrid";
import TravelGrid from "./components/TravelGrid";

function TourForm() {
  const [formData, setFormData] = React.useState({
    s_hasTickets: "true",
    currencyAlias: "KZT",
    s_ticketsIncluded: "true",
    includeOilTaxesAndVisa: "1",
    cityFromId: 1312,
    countryId: 3,

    s_adults: 2,
    s_nightsMin: 3,
    s_nightsMax: 10,
    s_departFrom: "19/05/2024",
    s_departTo: "25/05/2024",
    requestId: 0,
    pageSize: 10,
    pageNumber: 1,
    updateResult: 1,
    includeDescriptions: 1,
    s_hotelIsNotInStop: true,
    showHotelFacilities: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Sending data...", formData);

    fetch("http://sletat.ru.local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Response:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        City From ID:
        <input
          type="number"
          name="cityFromId"
          value={formData.cityFromId}
          onChange={handleChange}
        />
      </label>
      {/* Add more fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
}
function App() {
  const tour = data.GetToursResult.Data.aaData[0]; // Assuming y
  console.log(tour);
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack direction="column">
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ xs: "column", sm: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              padding: 2,
              borderRadius: "20px 20px 0 20px",
              boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
            }}
          >
            <CitySelectV3 />
            <Stack divider={<Divider orientation="horizontal" />}>
              <CountrySelectV3 />

              <Trgger5 />
            </Stack>

            <Trigger2 />

            <Button sx={{ minWidth: 100 }} variant="outlined" color="primary">
              Поиск
            </Button>
            {/* <UnstyledSelectRichOptions/>
          <UnstyledSelectRichOptions2/> */}
          </Stack>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "start" }}>
            <DrawerFilters />
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row" }}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                width: "100%",
                padding: 2,
                borderRadius: "0 0 20px 20px",
                boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
              }}
            >
              <Trigger3 />
              <Trigger4 />

              <MealTypesDropdown />
            </Stack>
          </Box>
          <Box sx={{ mt: 10 }}>
           
            <HotelGrid/>
            <TravelGrid/>
            {/* <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https:${tour[34]}`} // Assuming tour[29] is the URL for the image
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
          {tour[6]} - {tour[7]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hotel Category: {tour[8]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Room Type: {tour[9]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Meal Type: {tour[10]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {tour[15]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Departure: {tour[12]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Arrival: {tour[13]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration: {tour[14]} nights
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Country: {tour[31]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Resort: {tour[19]}
        </Typography>
      </CardContent>
    </Card> */}
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default App;
