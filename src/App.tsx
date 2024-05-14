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
import { UnstyledSelectRichOptions, UnstyledSelectRichOptions2 } from "./components/CountryDropdownV2";
import {CountrySelectV3} from "./components/CountryDropdownV3";
import { CitySelectV3 } from "./components/CityDropdownV3";


function App() {
  const [nightsFrom, setNightsFrom] = React.useState("");

  const handleChange = (event) => {
    setNightsFrom(event.target.value);
  };
  const [va, setVa] = React.useState(1264)
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack
          spacing={{xs: 1, sm: 2}}
          direction={{ xs: 'column', sm: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{
            padding: 2,
            borderRadius: 3,
            boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
          }}
        >
       
          <CalendarDropdown />
          {/* <UnstyledSelectRichOptions/>
          <UnstyledSelectRichOptions2/> */}
          <CountrySelectV3 id={va}/>
          <CitySelectV3 onCitySelect={(id) => setVa(id)}/>
        </Stack>
      </Container>
    </>
  );
}

export default App;
