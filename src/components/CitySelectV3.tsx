//FULLY FIXED
import React, { useEffect } from "react";
import { Autocomplete, AutocompleteOption, ListItemContent } from "@mui/joy";
import { useCityStore } from "./store/CityStore";

export function CitySelectV3() {
  const { setCity, cities, getCities } = useCityStore();
  useEffect(() => {
    getCities();
  }, [getCities]);

  const handleSelect = (
    _event: React.SyntheticEvent<Element, Event>,
    value: City | null
  ) => {
    if (value) {
      setCity(value);
    }
  };

  return (
    <Autocomplete
      id="city-select-demo"
      placeholder="Выберите город"
      slotProps={{
        input: {
          autoComplete: "new-password", // disable autocomplete and autofill
        },
      }}
      sx={{ width: 300 }}
      options={cities}
      autoHighlight
      variant="plain"
      onChange={handleSelect}
      getOptionLabel={(option) => option.Name}
      getOptionKey={(option) => option.Id}
      renderOption={(props, option) => (
        <AutocompleteOption {...props} key={option.Id}>
          <ListItemContent sx={{ fontSize: "sm" }} key={option.Id}>
            {option.Name} {option.Id}
          </ListItemContent>
        </AutocompleteOption>
      )}
    />
  );
}
