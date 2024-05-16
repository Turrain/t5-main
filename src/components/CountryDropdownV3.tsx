import * as React from "react";
import Autocomplete from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import fetchCountryData from "./api/fetchCountry";
import { flagsData } from "./api/flagsData";
import { Chip, FormControl, FormLabel, Stack } from "@mui/joy";

interface CountrySelectV3Props {
  id: number;
  onCountrySelect: (cityId: number) => void;
}

export function CountrySelectV3({ id, onCountrySelect }: CountrySelectV3Props) {
  const { country, setCountry} = useCountryStore();
  
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
  const handleSelect = (event, value) => {
    if (value) {
      onCountrySelect(value.Id); // Assuming 'Id' is the property that holds the city ID
      setCountry(value)
    }
  };
  return (
    <FormControl>
  {/* <FormLabel>Выберите курорт</FormLabel> */}
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

</FormControl>
    
  );
}
import create from 'zustand';

interface CountryStore {
  country: Country;
  setCountry: (country: Country) => void;
}

export const useCountryStore = create<CountryStore>((set) => ({
  country: 0,
  setCountry: (country) => {console.log(country); set({ country })},
}));