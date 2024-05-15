import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from "@mui/joy";
import { Popover, Stack } from "@mui/material";
import { Delete, Remove } from "@mui/icons-material";

export function TouristSelector() {
  const [adultCount, setAdultCount] = useState(2);

  const [children, setChildren] = useState([]);
  const [selectedChildId, setSelectedChildId] = useState(null);
  const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const handleAdultChange = (change) => {
    setAdultCount(Math.max(0, adultCount + change));
  };
  const handleAddChild = () => {
    const newChild = { id: Date.now(), age: 8 };
    setChildren([...children, newChild]);
    setSelectedChildId(newChild.id); // Automatically select newly added child
  };

  const handleRemoveChild = (id) => {
    setChildren(children.filter(child => child.id !== id));
    if (id === selectedChildId) {
      setSelectedChildId(null); // Deselect if the removed child was selected
    }
  };

  const handleSelectChild = (id) => {
    if (id === selectedChildId) {
      setSelectedChildId(null); // Toggle selection off if the same child is clicked
    } else {
      setSelectedChildId(id);
    }
  };
  const handleSetChildAge = (age) => {
    if (selectedChildId) {
      setChildren(children.map(child => (child.id === selectedChildId ? { ...child, age } : child)));
      setSelectedChildId(null); // Deselect the child automatically after setting the age
    }
  };
  return (
    <Box>
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
        Выберите кол-во человек
      </Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <IconButton
          variant="outlined"
          color="primary"
          onClick={() => handleAdultChange(-1)}
        >
          -
        </IconButton>
        <Typography sx={{ mx: 2 }}>{adultCount} взрослых</Typography>
        <IconButton
          variant="outlined"
          color="primary"
          onClick={() => handleAdultChange(1)}
        >
          +
        </IconButton>
      </Stack>
      <Divider sx={{ my: 2 }} />

      <List>
        {children.map((child) => (
          <ListItem key={child.id}>
            <ListItemButton onClick={() => handleSelectChild(child.id)}>
              Ребенок {child.age} лет
            </ListItemButton>
            <IconButton
              aria-label="Delete"
              onClick={() => handleRemoveChild(child.id)}
              color="danger"
            >
              ✖
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
        onClick={handleAddChild}
        sx={{ width: "100%", mb: 2 }}
      >
        Добавить ребенка
      </Button>
      {selectedChildId && (
        <>
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
            Выберите возраст
          </Typography>

          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
              gap: 1,
            }}
          >
            {ages.map((age) => (
              <Button
                key={age}
                variant="outlined"
                onClick={() => handleSetChildAge(age)}
                sx={{
                  color:
                    age ===
                    (children.find((child) => child.id === selectedChildId)
                      ?.age || 0)
                      ? "primary"
                      : "neutral",
                  width: 50,
                  height: 40,
                  p: 2,
                  fontSize: "0.75rem",
                }}
              >
                {age} {age === 1 ? "год" : age > 1 && age < 5 ? "года" : "лет"}
              </Button>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
export function Trigger4() {
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
        Дети
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
        <TouristSelector />
      </Popover>
    </>
  );
}
