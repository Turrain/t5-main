import * as React from "react";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import {
  Box,
  IconButton,
  Input,
  ListItemButton,
  Stack,
  listItemButtonClasses,
} from "@mui/joy";
import { Popover } from "@mui/material";
import { KeyboardArrowDown, ReceiptLong } from "@mui/icons-material";
import { useHotelsStarsStore } from "./HotelStarDropdown";
import { useCountryStore } from "./CountryDropdownV3";
import { useHotelsStore } from "./HotelsDropdown";
import { useCountryCityStore } from "./CountryCityDropdown";
import fetchCountryData from "./api/fetchCountry";
import fetchCountryCityData from "./api/fetchCountryCity";
import fetchHotelsData from "./api/fetchHotels";

export default function ExampleFilterStatusCheckbox() {
  const { country } = useCountryStore();
  const [allCountries, setAllCountries] = React.useState<CountryCity[]>([]);
  const [cities, setCities] = React.useState({});
  const { countries, setCountries } = useCountryCityStore();
  const [allHotels, setAllHotels] = React.useState<Hotel[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const cityData = await fetchCountryCityData(country.Id);
      if (cityData) {
        const mp = cityData.map((option) => {
          const firstLetter = option.Name[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
            ...option,
          };
        });
        setAllCountries(mp);
      }
    };

    fetchData();
  }, [country]);
  React.useEffect(() => {
    console.log(Object.keys(cities));
    const fetchData = async () => {
      const cityData = await fetchHotelsData({
        countryId: country.Id,
        towns: Object.keys(cities).map((e) => Number(e)),
        stars: [],
      });
      if (cityData) {
        const mp = cityData.map((option) => {
          const firstLetter = option.Name[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
            ...option,
          };
        });
        setAllHotels(mp);
      }
    };

    fetchData();
  }, [cities, country]);
  const [status, setStatus] = React.useState({
    declinedPayment: true,
    deliveryError: true,
    wrongAddress: false,
  });
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <>
      <Typography
        sx={{
          width: "100%",
          p: 1,
          mb: 1,
          backgroundColor: "primary.solidBg",
          borderRadius: 7,
          fontSize: "14px",
          fontWeight: 500,
          textAlign: "center",
          color: "#fff",
        }}
      >
        Выберите курорт/отель
      </Typography>
      <Stack direction="row">
        <Box
          sx={{
            width: 300,
            pl: "24px",
            maxHeight: 500,
            overflowY: "auto",
            overflowX: 'hidden',
            scrollbarWidth: "thin",
            backgroundColor: "background.level1",
            borderRadius: 8,
          }}
        >
          <List
            size="sm"
            sx={(theme) => ({
              // Gatsby colors
              "--joy-palette-primary-plainColor": "#8a4baf",
              "--joy-palette-neutral-plainHoverBg": "transparent",
              "--joy-palette-neutral-plainActiveBg": "transparent",
              "--joy-palette-primary-plainHoverBg": "transparent",
              "--joy-palette-primary-plainActiveBg": "transparent",
              [theme.getColorSchemeSelector("dark")]: {
                "--joy-palette-text-secondary": "#635e69",
                "--joy-palette-primary-plainColor": "#d48cff",
              },

              "--List-insetStart": "8px",
              "--ListItem-paddingY": "0px",
              "--ListItem-paddingRight": "16px",
              "--ListItem-paddingLeft": "21px",

              "--ListItem-startActionWidth": "0px",
              "--ListItem-startActionTranslateX": "-50%",

              [`& .${listItemButtonClasses.root}`]: {
                borderLeftColor: "divider",
              },
              [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]:
                {
                  borderLeftColor: "currentColor",
                },
              '& [class*="startAction"]': {
                color: "var(--joy-palette-text-tertiary)",
              },
              "& li": {
                marginTop: 0,
                marginBottom: 0,
              },
            })}
          >
            {allCountries
              .filter((e) => e.ParentId == null)
              .map((e) => {
                return (
                  <ListItem
                    nested
                    key={e.Id}
                    sx={{ my: 1 }}
                    startAction={
                      <Checkbox
                        size="sm"
                        color="primary"
                        overlay
                        checked={cities[e.Id]}
                        onChange={(ev) =>
                          setCities({ ...cities, [e.Id]: ev.target.checked })
                        }
                      />
                    }
                  >
                    <ListItem>
                      <Typography
                        level="inherit"
                        sx={{
                          fontWeight: open ? "bold" : undefined,
                          color: open ? "text.primary" : "inherit",
                        }}
                      >
                        {e.Name}
                      </Typography>
                      <Typography component="span" level="body-xs">
                        {e.Id}
                      </Typography>
                    </ListItem>

                    <List
                      sx={{ "--ListItem-paddingY": "0px", marginLeft: "1px" }}
                    >
                      {allCountries
                        .filter((et) => et.ParentId == e.Id)
                        .map((ee) => (
                          <ListItem
                            startAction={
                              <Checkbox
                                size="sm"
                                color="primary"
                                overlay
                                checked={cities[ee.Id]}
                                onChange={(ev) =>
                                  setCities({
                                    ...cities,
                                    [ee.Id]: ev.target.checked,
                                  })
                                }
                              />
                            }
                          >
                            <ListItemButton>{ee.Name}</ListItemButton>
                          </ListItem>
                        ))}
                    </List>
                  </ListItem>
                );
              })}
          </List>
        </Box>
        <Sheet
          variant="plain"
          sx={{
            borderRadius: "sm",
            width: 300,
            maxHeight: 500,
            overflowY: "auto",
            overflowX: 'hidden',
            scrollbarWidth: "thin",
          }}
        >
          <div role="group" aria-labelledby="filter-status">
            <Box sx={{ p: 0.75 }}>
              <Input placeholder="Type in here…" variant="soft" />
            </Box>

            <List>
              {allHotels.map((e) => (
                <ListItem variant="plain" sx={{ borderRadius: 8 }}>
                  <Checkbox size="sm" label={e.Name} color="primary" overlay />
                </ListItem>
              ))}
            </List>
          </div>
        </Sheet>
      </Stack>
    </>
  );
}
export function Trgger5() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        sx={{ maxWidth: 150 }}
        variant="outlined"
        onClick={handleClick}
      >
        3 взр. 2 реб.
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
              borderRadius: "20px",
              p: 2,
            },
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ExampleFilterStatusCheckbox />
      </Popover>
    </>
  );
}
