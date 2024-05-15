import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import fetchCountryData from './api/fetchCountry';
import { flagsData } from './api/flagsData';
import fetchCityData from './api/fetchDepartCity';



interface CitySelectV3Props {
  onCitySelect: (cityId: number) => void;
}

export function CitySelectV3({ onCitySelect }: CitySelectV3Props) {
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
        setCities(mp.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        ));
      }
    };

    fetchData();
  }, []);
  const handleSelect = (event, value) => {
    if (value) {
      onCitySelect(value.Id); // Assuming 'Id' is the property that holds the city ID
    }
  };
  return (
    <Autocomplete
      id="country-select-demo"
      placeholder="Выберите город"
      slotProps={{
        input: {
          autoComplete: 'new-password', // disable autocomplete and autofill
        },
      }}
      sx={{ width: 300 }}
      options={cities}
      autoHighlight
      variant='plain'
      onChange={handleSelect}
      
      getOptionLabel={(option) => option.Name}
      renderOption={(props, option) => (
        <AutocompleteOption {...props}>
          <ListItemContent sx={{ fontSize: 'sm' }}>
            {option.Name}
            
          </ListItemContent>
        </AutocompleteOption>
      )}
    />
  );
}