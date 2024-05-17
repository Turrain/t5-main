import * as React from "react";
import Stack from "@mui/material/Stack";
import { Box, Container, Divider } from "@mui/material";

import { CountrySelectV3 } from "./components/CountrySelectV3";
import { CitySelectV3 } from "./components/CitySelectV3";
import { Trigger3 } from "./components/NightsDropdown";
import { Button } from "@mui/joy";
import DrawerFilters from "./components/Drawer";
import { Trigger2 } from "./components/CalendarV2";
import { Trigger4 } from "./components/ChildsDropdownV2";
import { MealTypesDropdown } from "./components/MealTypesDropdown";
import { Trgger5 } from "./components/HotelSelectV2";
function TourForm() {
  const [formData, setFormData] = React.useState({
      s_hasTickets: 'true',
      currencyAlias: 'KZT',
      s_ticketsIncluded: 'true',
      includeOilTaxesAndVisa: '1',
      cityFromId: 1312,
      countryId: 3,
      
      s_adults: 2,
      s_nightsMin: 3,
      s_nightsMax: 10,
      s_departFrom: '19/05/2024',
      s_departTo: '25/05/2024',
      requestId: 0,
      pageSize: 10,
      pageNumber: 1,
      updateResult: 1,
      includeDescriptions: 1,
      s_hotelIsNotInStop: true,
      showHotelFacilities: 1
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      console.log("Sending data...", formData);

      fetch('http://sletat.ru.local', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => console.log("Response:", data))
      .catch(error => console.error('Error:', error));
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
        </Stack>
        <TourForm/>
      </Container>
    </>
  );
}

export default App;
