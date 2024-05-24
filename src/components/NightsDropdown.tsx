// Trigger3.tsx
import * as React from "react";
import { Box, Button, Typography } from "@mui/joy";
import { Popover } from "@mui/material";
import { useNightsStore } from "./store/NightsStore";


export function Trigger3() {
  const {
    hoverIndex,
    startIndex,
    endIndex,
  
    handleClickIndex,
    handleMouseEnter,
  } = useNightsStore();

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
        {startIndex} - {endIndex} ночей
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
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "center",
            color: "#fff",
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
                onClick={() => handleClickIndex(index)}
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
