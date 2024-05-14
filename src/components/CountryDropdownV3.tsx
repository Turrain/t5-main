import * as React from "react";
import Autocomplete from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import fetchCountryData from "./api/fetchCountry";
import { flagsData } from "./api/flagsData";
import { Chip, Stack } from "@mui/joy";

interface CountrySelectV3Props {
    id: number
}

export function CountrySelectV3({id}: CountrySelectV3Props) {
  const [countries, setCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const cityData = await fetchCountryData(id);
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
  }, [id]);
  return (
    <Autocomplete
      id="country-select-demo"
      placeholder="Choose a country"
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
      renderOption={(props, option) => (
        <AutocompleteOption {...props}>
          <ListItemDecorator>
            <img loading="lazy" width={20} height={14} src={option.flag} />
          </ListItemDecorator>
          <ListItemContent sx={{ fontSize: "sm" }}>
            <Stack direction="row">
              <Typography level="body-sm" sx={{ flex: 1 }}>
                {option.Name}
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
  );
}
