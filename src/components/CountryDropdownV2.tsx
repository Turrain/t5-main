import * as React from "react";
import PropTypes from "prop-types";
import {
  Select as BaseSelect,
  SelectProps,
  SelectRootSlotProps,
  selectClasses,
} from "@mui/base/Select";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";
import { styled } from "@mui/system";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { flagsData } from "./api/flagsData";
import fetchCountryData from "./api/fetchCountry";
import { Input as BaseInput } from "@mui/base/Input";
import { Chip, Stack, Typography } from "@mui/material";
import fetchCityData from "./api/fetchDepartCity";
import { FlightLand } from "@mui/icons-material";

const Label = styled("label")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.75rem;
    display: block;
    margin-bottom: 4px;
    font-weight: 400;
    color: ${theme.palette.mode === "dark" ? grey[400] : grey[700]};
    `
);
export function UnstyledSelectRichOptions() {
  const [countries, setCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const cityData = await fetchCountryData();
      if (cityData) {
        const mp = cityData.map((option) => {
          const firstLetter = option.Name[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
            flag: flagsData[option.OriginalName],
            ...option,
          };
        });
        setCountries(mp);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Stack>
        <Label htmlFor="named-select">Выберите страну</Label>
        <Select id="named-select" placeholder="Выберите...">
          {countries.map((country) => (
            <Option key={country.Id} value={country.Id} label={country.Name}>
              <Stack direction="row">
                <img loading="lazy" width={20} height={14} src={country.flag} />
                <Typography variant="body2" sx={{ flex: 1 }}>
                  {" "}
                  {country.Name}
                </Typography>

                <Chip
                  color="primary"
                  label={
                    country.IsProVisa
                      ? "Шенген"
                      : country.IsVisa
                      ? "Visa"
                      : "Без Visa"
                  }
                  size="small"
                />
              </Stack>
            </Option>
          ))}
        </Select>
      </Stack>
    </>
  );
}

export function UnstyledSelectRichOptions2() {
  const [cities, setCities] = React.useState<City[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const cityData = await fetchCityData();
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

  return (
    <Stack>
      <Label>Выберите город</Label>
      <Select placeholder="Выберите...">
        {cities.map((city) => (
          <Option key={city.Id} value={city.Id} label={city.Name}>
            <Stack direction="row">
              <Typography variant="body2" sx={{ flex: 1 }}>
                {" "}
                {city.Name}
              </Typography>
            </Stack>
          </Option>
        ))}
      </Select>
    </Stack>
  );
}

const Select = React.forwardRef(function CustomSelect(
  props: SelectProps<number, false>,
  ref: React.ForwardedRef<any>
) {
  const slots: SelectProps<number, false>["slots"] = {
    root: Button,
    listbox: StyledListbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Button = React.forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;

  return (
    <StyledButton type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon className="selicon" />
    </StyledButton>
  );
});

const StyledButton = styled("button", { shouldForwardProp: () => true })(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-width: 150px;
    padding: 8px 12px;
    border-radius: 8px;
    text-align: left;
    line-height: 1.5;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    position: relative;
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }
  
    &.${selectClasses.focusVisible} {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    & > .selicon {
      
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
  
    & > svg {
        font-size: 1rem;
    }
    `
);

const Listbox = styled("ul")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    max-height: 400px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 2px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.80)" : "rgba(0,0,0, 0.10)"
    };
    `
);

const StyledListbox = ({ children }) => (
  <>
    <div style={{ marginTop: "8px" }}>
      <UnstyledInputIntroduction />
      <Listbox>{children}</Listbox>
    </div>
  </>
);

const Option = styled(BaseOption)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.highlighted} {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &:focus-visible {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    &.${optionClasses.highlighted}.${optionClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionClasses.disabled}) {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    & img {
      margin-right: 10px;
    }
    `
);

const Popup = styled("div")`
  z-index: 1;
  width: 90%;
  margin: auto;
`;

const InputElement = styled("input")(
  ({ theme }) => `
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
    
    }
    
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

export function UnstyledInputIntroduction() {
  return <Input aria-label="Demo input" placeholder="Type something…" />;
}
const Input = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});
