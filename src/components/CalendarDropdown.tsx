import React from 'react';

import { Button, Popper, TextField } from '@mui/material';
import { DateRangePicker } from 'materialui-daterange-picker';


export default function CalendarDropdown() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    toggle()
  };

  const [open, setOpen] = React.useState(false);
  const defaultDate = {
    startDate: Date.parse("2024-01-01"),
    endDate: Date.now()
  };
  const [dateRange, setDateRange] = React.useState(defaultDate);

  const toggle = () => setOpen(!open);
  return (
    <>
    <Button onClick={handleClick} variant="outlined" color="primary">
      {new Date(dateRange.startDate).toLocaleDateString()} - {new Date(dateRange.endDate).toLocaleDateString()}
    </Button>
    <Popper open={open} anchorEl={anchorEl}>
      
    <DateRangePicker
          open={open}
          toggle={toggle}
          onChange={(range) => {
            setDateRange(range);
          }}
          initialDateRange={dateRange}
          
        />
          </Popper>    
        </>
  );
}
