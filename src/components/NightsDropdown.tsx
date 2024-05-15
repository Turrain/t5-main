import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import { Slider } from '@mui/joy';

interface NightsDropdownProps {
  onNightsSelect?: (nights: number) => void;
}
function valueText(value: number) {
    return `${value}°C`;
  }
export function NightsDropdown({ onNightsSelect }: NightsDropdownProps) {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };
  const handleSelect = (event, value) => {
    if (value) {
      onNightsSelect(value); // Assuming 'value' is the number of nights
    }
  };

  return (
    <Slider
    getAriaLabel={() => 'Temperature range'}
    value={value}
    onChange={handleChange}
    valueLabelDisplay="auto"
    getAriaValueText={valueText}
    valueLabelDisplay="on"
    marks
    step={1}
    min={1}
    max={21}
  />
  );
}
