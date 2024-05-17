import { Box, Chip, Select, Option } from "@mui/joy";
import React from "react";

import { Typography } from "@mui/material";
import fetchMealTypesData from "./api/fetchMealTypes";

export function MealTypesDropdown() {

  const [mealTypes, setMealTypes] = React.useState<MealType[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const cityData = await fetchMealTypesData();
      if (cityData) {
        const mp = cityData.map((option) => {
          const firstLetter = option.Name[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
            ...option,
          };
        });
        setMealTypes(
          mp.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))
        );
      }
    };

    fetchData();
  }, []);
  return (
    <Select
      variant="outlined"
      multiple
      placeholder={
        <Typography
          color="primary"
          sx={{
            fontFamily: "var(--joy-fontFamily-body)",
            fontWeight: "var(--joy-fontWeight-lg)",
            fontSize: "var(--joy-fontSize-sm)",
            lineHeight: "var(--joy-lineHeight-md",
          }}
        >
          Тип обеда
        </Typography>
      }
      renderValue={(selected) => (
        <Box sx={{ display: "flex", gap: "0.25rem" }}>
          {selected.map((selectedOption) => (
            <Chip variant="soft" color="primary">
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
      )}
      sx={{
        borderColor:
          "var(--variant-outlinedBorder, var(--joy-palette-primary-outlinedBorder, var(--joy-palette-primary-300, #97C3F0)))",
      }}
      slotProps={{
        listbox: {
          sx: {
            width: "100%",
          },
        },
      }}
    >
      {mealTypes.map((e) => (
        <Option value={e.Id} key={e.Id}>{e.Name}</Option>
      ))}
    </Select>
  );
}
