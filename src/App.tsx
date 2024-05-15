import * as React from "react";
import Stack from "@mui/material/Stack";
import {
  Autocomplete,
  AutocompleteCloseReason,
  Box,
  ButtonBase,
  ClickAwayListener,
  Container,
  Divider,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Popper,
  Select,
  TextField,
  Typography,
  autocompleteClasses,
  styled,
  useTheme,
} from "@mui/material";

import CalendarDropdown from "./components/CalendarDropdown";
import {
  UnstyledSelectRichOptions,
  UnstyledSelectRichOptions2,
} from "./components/CountryDropdownV2";
import { CountrySelectV3 } from "./components/CountryDropdownV3";
import { CitySelectV3 } from "./components/CityDropdownV3";
import { CountryCitySelectV3 } from "./components/CountryCityDropdown";
import { NightsDropdown, Trigger3 } from "./components/NightsDropdown";
import { Button } from "@mui/joy";
import DrawerFilters from "./components/Drawer";
import DynamicInputs from "./components/DynamicInputs";
import Component, { SelectBasic, Trgger } from "./components/cm";
import { DoubleCalendar, Trgger2, Trigger2 } from "./components/CalendarV2";
import { Trigger4 } from "./components/ChildsDropdownV2";

function App() {
  const [DepartCityId, setDepartCityId] = React.useState(1264);
  const [CountryId, setCountryId] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({
    startDate: new Date(),
    endDate: new Date(),
  });

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
            <CitySelectV3 onCitySelect={(id) => setDepartCityId(id)} />
            <Stack divider={<Divider orientation="horizontal" />}>
              <CountrySelectV3
                id={DepartCityId}
                onCountrySelect={(id) => setCountryId(id)}
              />
              <CountryCitySelectV3 id={CountryId} />
            </Stack>

            <CalendarDropdown />

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
              <Trigger2 />
              <Trigger3 />
              <Trigger4/>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default App;
