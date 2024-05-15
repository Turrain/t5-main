// src/Counter.js
import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
      <Button
        variant="contained"
        onClick={onDecrement}
        sx={{ minWidth: '30px', minHeight: '30px', padding: '5px', mr: 1 }}
      >
        -
      </Button>
      <Typography variant="h6" sx={{ minWidth: '20px', textAlign: 'center' }}>
        {count}
      </Typography>
      <Button
        variant="contained"
        onClick={onIncrement}
        sx={{ minWidth: '30px', minHeight: '30px', padding: '5px', ml: 1 }}
      >
        +
      </Button>
    </Box>
  );
};

export default Counter;