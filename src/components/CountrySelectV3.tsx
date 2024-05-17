//FULLY FIXED

import React, { useEffect } from "react";
import {
  Autocomplete,
  AutocompleteOption,
  ListItemDecorator,
  ListItemContent,
  Typography,
  Chip,
  FormControl,
  Stack,
} from "@mui/joy";

import { useCityStore } from "./store/CityStore";
import { useCountryStore } from "./store/CountryStore";



export function CountrySelectV3() {
  const { setCountry, countries, getCountries } = useCountryStore();

  const { city} = useCityStore()
  useEffect(() => {
    if(city) getCountries(city.Id);
  }, [city,getCountries]);

  const handleSelect = (
    _event: React.SyntheticEvent<Element, Event>,
    value: Country | null
  ) => {
    if (value) {
  
      setCountry(value);
    }
  };

  return (
    <FormControl>
      <Autocomplete
        id="country-select-demo"
        placeholder="Выберите страну"
        slotProps={{
          input: {
            autoComplete: "new-password", // disable autocomplete and autofill
          },
        }}
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        variant="plain"
        getOptionLabel={(option) => option.Name}
        onChange={handleSelect}
        getOptionKey={(option) => option.Id}
        renderOption={(props, option) => (
          <AutocompleteOption {...props} key={option.Id}>
            {option.flag && (
              <ListItemDecorator>
                <img
                  loading="lazy"
                  width={20}
                  height={14}
                  src={option.flag}
                  alt={`${option.Name} flag`}
                />
              </ListItemDecorator>
            )}

            <ListItemContent sx={{ fontSize: "sm" }}  key={option.Id}>
              <Stack direction="row">
                <Typography level="body-sm" sx={{ flex: 1 }}>
                  {option.Name} {option.Id}
                </Typography>
                <Chip color="primary" size="sm">
                  {option.IsProVisa
                    ? "Шенген"
                    : option.IsVisa
                    ? "Visa"
                    : "Без Visa"}
                </Chip>
              </Stack>
            </ListItemContent>
          </AutocompleteOption>
        )}
      />
    </FormControl>
  );
}
