import React, { useState } from "react";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  Select,
  Option,
  Stack,
  Typography,
  Box,
  Button,
  MenuItem,
} from "@mui/joy";
import { Popover } from "@mui/material";

export default function Component() {
  const [adultCount, setAdultCount] = useState(2);
  const [selectedAge, setSelectedAge] = useState(null);
  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    setInputs([...inputs, { value: 0 }]);
  };

  const handleInputChange = (index, event, nvalue) => {
    console.log(inputs);
    const newInputs = inputs.map((input, i) => {
      if (i === index) {
        return { ...input, value: nvalue };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const handleSave = () => {
    // Here you can handle the save logic, e.g., sending the data to a server
    console.log("Inputs:", inputs);
  };
  const ages = [
    "Меньше 2 лет",
    "2 года",
    "3 года",
    "4 года",
    "5 лет",
    "6 лет",
    "7 лет",
    "8 лет",
    "9 лет",
    "10 лет",
    "11 лет",
    "12 лет",
    "13 лет",
    "14 лет",
    "15 лет",
  ];

  const handleAdultChange = (change) => {
    setAdultCount((prev) => Math.max(0, prev + change));
    console.log(adultCount);
  };

  const handleAgeSelection = (age) => {
    setSelectedAge(age);
    console.log(age);
  };

  return (
    <Box key="1" sx={{ bgcolor: "white", p: 3, width: 280 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Button variant="outlined" onClick={() => handleAdultChange(-1)}>
          <RemoveIcon />
        </Button>
        <Typography level="body-sm" sx={{ color: "text.primary" }}>
          {adultCount} adult{adultCount !== 1 ? "s" : ""}
        </Typography>
        <Button variant="outlined" onClick={() => handleAdultChange(1)}>
          <AddIcon />
        </Button>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography level="body-sm" sx={{ mb: 1 }}>
          Дети
        </Typography>
        <Stack gap={1}>
          {inputs.map((input, index) => (
            <Select
              key={index}
              onChange={(event, nvalue) =>
                handleInputChange(index, event, nvalue)
              }
            >
              {ages.map((age, index2) => (
                <Option value={age}>{age}</Option>
              ))}
            </Select>
          ))}
        </Stack>
      </Box>
      <Button
        variant="outlined"
        sx={{ width: "100%" }}
        color="primary"
        onClick={handleAddInput}
      >
        Add Input
      </Button>
    </Box>
  );
}
export function Trgger() {
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
        sx={{ maxWidth: 150 }}
        variant="outlined"
        onClick={handleClick}
      >
        3 взр. 2 реб.
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: { sx: { boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)", borderRadius: '20px' } },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Component />
      </Popover>
    </>
  );
}
