import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Done, Close } from "@mui/icons-material";
import {
  autocompleteClasses,
  Popper,
  Button,
  InputBase,
  Box,
  Stack,
  Typography,
  ClickAwayListener,
  Autocomplete,
  AutocompleteCloseReason,
  Chip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchCityData from "./api/fetchDepartCity";
import fetchCountryData from "./api/fetchCountry";

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === "light" ? " #eaecef" : "#30363d"
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent",
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));
function PopperComponent(props: PopperComponentProps) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === "light" ? "#e1e4e8" : "#30363d"}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"
  }`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === "light" ? "#24292e" : "#c9d1d9",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
}));


const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",
  borderBottom: `1px solid ${
    theme.palette.mode === "light" ? "#eaecef" : "#30363d"
  }`,
  "& input": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#0d1117",
    padding: 8,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `1px solid ${
      theme.palette.mode === "light" ? "#eaecef" : "#30363d"
    }`,
    fontSize: 14,
    "&:focus": {
      boxShadow: `0px 0px 0px 3px ${
        theme.palette.mode === "light"
          ? "rgba(3, 102, 214, 0.3)"
          : "rgb(12, 45, 107)"
      }`,
      borderColor: theme.palette.mode === "light" ? "#0366d6" : "#388bfd",
    },
  },
}));

export default function CountryDropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState(null);
  const [pendingValue, setPendingValue] = React.useState(null);
  const theme = useTheme();

  const [cities, setCities] = React.useState<Country[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const cityData = await fetchCountryData();
      if (cityData) {
        const mp = cityData.map((option) => {
          const firstLetter = option.Name[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
            ...option,
          };
        });
        setCities(mp);
      }
    };

    fetchData();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  return (
    <React.Fragment>
      <Box sx={{ width: 150, fontSize: 13 }}>
        <Button disableRipple aria-describedby={id} onClick={handleClick}>
          <Stack sx={{ alignItems: "center" }}>
            <Typography variant="subtitle2">Location</Typography>
          </Stack>
        </Button>

        <Box
          key={value?.Name}
          sx={{
            mt: "3px",
            padding: ".15em 4px",
            fontWeight: 500,
            lineHeight: "15px",
            borderRadius: "2px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          {value != null ? value.Name : "Where are you go?"}
        </Box>
      </Box>

      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Box
              sx={{
                borderBottom: `1px solid ${
                  theme.palette.mode === "light" ? "#eaecef" : "#30363d"
                }`,
                padding: "8px 10px",
                fontWeight: 600,
              }}
            >
              Выберите
            </Box>
            <Autocomplete
              open
              onClose={(
                event: React.ChangeEvent<object>,
                reason: AutocompleteCloseReason
              ) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              value={pendingValue}
              onChange={(event, newValue, reason) => {
                if (
                  event.type === "keydown" &&
                  ((event as React.KeyboardEvent).key === "Backspace" ||
                    (event as React.KeyboardEvent).key === "Delete") &&
                  reason === "removeOption"
                ) {
                  return;
                }
                setPendingValue(newValue);
              }}
              disableCloseOnSelect
              PopperComponent={PopperComponent}
              renderTags={() => null}
              noOptionsText="No labels"
              groupBy={(option) => option.firstLetter}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Box
                    component={Done}
                    sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                    style={{
                      visibility: selected ? "visible" : "hidden",
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 14,
                      height: 14,
                      flexShrink: 0,
                      borderRadius: "3px",
                      mr: 1,
                      mt: "2px",
                    }}
                  />
                  <Box
                    sx={{
                      flexGrow: 1,
                      
                    }}
                  >
                    <Stack direction="row" gap={1}>
                      
                      <FlagDisplay countryName={option.OriginalName} />
                      <Typography variant="body2" flex={1}> {option.Name}</Typography>
                     
                      <Chip
                        size="small"
                        label={option.IsProVisa ? "Шенген" : option.IsVisa ? "Visa" : "Без Visa"}
                       
                        color="primary"


                      />
                    </Stack>
                  </Box>
                  <Box
                    component={Close}
                    sx={{ opacity: 0.6, width: 18, height: 18 }}
                    style={{
                      visibility: selected ? "visible" : "hidden",
                    }}
                  />
                </li>
              )}
              options={cities.sort(
                (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
              )}
              getOptionLabel={(option) => option.Name}
              renderInput={(params) => (
                <StyledInput
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Filter labels"
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </React.Fragment>
  );
}
const FlagDisplay = ({ countryName }) => {
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {
    const fetchFlagUrl = async () => {
     try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(
            countryName
          )}?fullText=true`
        );
        const data = await response.json();

        if (data.length > 0) {
          setFlagUrl(data[0].flags.svg);
        } else {
          setFlagUrl(""); // No flag found for the given country name
        }
      } catch (error) {
        console.error("Error fetching flag:", error);
        setFlagUrl("");
      }
    };

    fetchFlagUrl();
  }, [countryName]);

  return (
    <div>
      {flagUrl ? (
        <img src={flagUrl} width={24} alt={`Flag of ${countryName}`} />
      ) : (
        <></>
      )}
    </div>
  );
};
