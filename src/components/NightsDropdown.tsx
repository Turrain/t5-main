import * as React from "react";
import Autocomplete from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import { Box, Button, Slider } from "@mui/joy";
import { Popover } from "@mui/material";

export function Trigger3() {
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
  const [startIndex, setStartIndex] = React.useState<number | null>(null);
  const [endIndex, setEndIndex] = React.useState<number | null>(null);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickIndex = (event, index) => {
    console.log(startIndex, endIndex);
    if (startIndex === null || (startIndex !== null && endIndex !== null)) {
      setStartIndex(index);
      setEndIndex(null);
    } else if (startIndex !== null && endIndex === null) {
      if (index < startIndex) {
        setEndIndex(startIndex);
        setStartIndex(index);
      } else {
        setEndIndex(index);
      }
    }
  };
  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
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
        Ночи
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
              borderRadius: "20px",
              p: 1,
            },
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            p: 1,
            mb: 1,
            backgroundColor: "primary.solidBg",
            borderRadius: 7,
            fontSize:'14px',
            fontWeight: 500,
            textAlign: 'center',
            color: '#fff'
          }}
        >
          Выберите кол-во ночей
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 0.5,
          }}
        >
          {[...Array(28)].map((_, index) => {
            const cond =
              (startIndex !== null &&
                endIndex !== null &&
                index >= startIndex &&
                index <= endIndex) ||
              (startIndex !== null &&
                endIndex === null &&
                hoverIndex !== null &&
                index >= startIndex &&
                index <= hoverIndex);
            return (
              <Button
                key={index}
                variant={cond ? "solid" : "outlined"}
                sx={{
                  width: 40,
                  height: 40,
                }}
                onClick={(e) => handleClickIndex(e, index)}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {index + 1}
              </Button>
            );
          })}
        </Box>
      </Popover>
    </>
  );
}
