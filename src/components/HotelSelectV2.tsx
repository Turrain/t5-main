import * as React from "react";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import {
  Box,
  Input,
  ListItemButton,
  Stack,
  listItemButtonClasses,
} from "@mui/joy";
import { Popover } from "@mui/material";


import { useCountryStore } from "./store/CountryStore";
import { useCountryCityStore } from "./store/CountryCityStore";
import { useHotelStore } from "./store/HotelsStore";





export  function ExampleFilterStatusCheckbox() {
  const { country } = useCountryStore();
  const {getCountryCities, countryCities, setCountryCity, countryCity} = useCountryCityStore()
  const {getHotels, setHotel, hotels, hotel} = useHotelStore()
  React.useEffect(()=> {
    if(country) getCountryCities(country.Id)
  },[country, getCountryCities])
  React.useEffect(()=> {
    if(countryCity && country) getHotels(country.Id, countryCity.map(e=> e.Id), [])
  },[countryCity, country, getHotels])



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
            overflowX: "hidden",
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
            {countryCities
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
                        checked={countryCity.includes(e)}
                        onChange={(ev) =>
                          ev.target.checked ? setCountryCity([...countryCity, e]) :  setCountryCity(countryCity.filter(i => i != e))
                        }
                      />
                    }
                  >
                    <ListItem key={e.Id}>
                      <Typography
                        level="inherit"
                        sx={{
                    
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
                      {countryCities
                        .filter((et) => et.ParentId == e.Id)
                        .map((ee) => (
                          <ListItem key={ee.Id}
                            startAction={
                              <Checkbox
                                size="sm"
                                color="primary"
                                overlay
                                checked={countryCity.includes(e)}
                                onChange={(ev) =>
                                  ev.target.checked ? setCountryCity([...countryCity, e]) :  setCountryCity(countryCity.filter(i => i != e))
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
        <Box>
          <Box sx={{ p: 0.75, pt: 0 }}>
            <Stack direction="row">
            <Input placeholder="Type in here…" variant="soft" size="sm" sx={{borderRadius: 0}} />
        
           
            </Stack>
         
          </Box>
          <Sheet
            variant="plain"
            sx={{
              borderRadius: "sm",
             
              maxHeight: 500 - 70,
              overflowY: "auto",
              overflowX: "hidden",
              scrollbarWidth: "thin",
            }}
          >
            <div role="group" aria-labelledby="filter-status">
              <List>
                {hotels.map((e) => (
                  <ListItem variant="plain" sx={{ borderRadius: 8 }} key={e.Id}>
                    <Checkbox
                      size="sm"
                      label={e.Name}
                      color="primary"
                      overlay
                      checked={hotel.includes(e)}
                      onChange={(ev) =>
                        ev.target.checked ? setHotel([...hotel, e]) :  setHotel(hotel.filter(i => i != e))
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Sheet>
        </Box>
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
        sx={{ }}
        variant="outlined"
        onClick={handleClick}
      >
       Выберите курорт
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
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ExampleFilterStatusCheckbox />
      </Popover>
    </>
  );
}
