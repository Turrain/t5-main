import React, { useState } from "react";
import dayjs from "dayjs";
import { Box, Button, IconButton, Stack, Typography } from "@mui/joy";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const daysInMonth = (year, month) => {
  return dayjs(`${year}-${month + 1}-01`).daysInMonth();
};

const generateCalendar = (year, month) => {
  const totalDays = daysInMonth(year, month);
  const firstDay = dayjs(`${year}-${month + 1}-01`).day();
  const calendar = [];

  let dayCount = 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || dayCount > totalDays) {
        week.push("");
      } else {
        week.push(dayCount++);
      }
    }
    calendar.push(week);
    if (dayCount > totalDays) break;
  }
  return calendar;
};

export const Calendar = ({ selectedDate, onDateClick }) => {
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());

  const handleDateClick = (day) => {
    onDateClick(dayjs(`${currentYear}-${currentMonth + 1}-${day}`));
  };

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevMonth) =>
      prevMonth === 0 ? currentYear - 1 : currentYear
    );
  };

  const nextMonth = () => {
    setCurrentMonth((nextMonth) => (nextMonth === 11 ? 0 : nextMonth + 1));
    setCurrentYear((nextMonth) =>
      nextMonth === 11 ? currentYear + 1 : currentYear
    );
  };

  const calendarRows = generateCalendar(currentYear, currentMonth);

  return (
    <>
      <Box>
        <Button variant="plain" sx={{width:'100%'}}>
          {dayjs().year(currentYear).format("YYYY")}
        </Button>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={prevMonth}>
            <ArrowLeft />
          </IconButton>
          <Button variant="plain">
            {dayjs().month(currentMonth).format("MMMM")}
          </Button>
          <IconButton onClick={nextMonth}>
            <ArrowRight />
          </IconButton>
        </Stack>
        <table>
          <thead>
            <tr>
              <th>
                <Typography level="body-md" color="primary">
                  Sun
                </Typography>
              </th>
              <th>
                <Typography level="body-md" color="primary">
                  Mon
                </Typography>
              </th>
              <th>
                <Typography level="body-md" color="primary">
                  Tue
                </Typography>
              </th>
              <th>
                <Typography level="body-md" color="primary">
                  Wed
                </Typography>
              </th>
              <th>
                <Typography level="body-md" color="primary">
                  Thu
                </Typography>
              </th>
              <th>
                <Typography level="body-md" color="primary">
                  Fri
                </Typography>
              </th>
              <th>
                <Typography level="body-md" color="primary">
                  Sat
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {calendarRows.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex}>
                    <Button
                      variant="outlined"
                      sx={{ width: "100%", px: 1, height: 50, width: 50 }}
                      disabled={!day}
                    >
                      <Stack
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {day && (
                          <>
                            <Typography level="body-md" sx={{ lineHeight: 1 }}>
                              {day}
                            </Typography>
                            <Typography level="body-xs" sx={{ fontSize: 9 }}>
                              123 456
                            </Typography>
                          </>
                        )}
                      </Stack>
                    </Button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export const DoubleCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateClick = (date) => {
    setStartDate(date);
    if (endDate && date.isAfter(endDate)) {
      setEndDate(null);
    }
  };

  const handleEndDateClick = (date) => {
    if (!startDate || date.isAfter(startDate)) {
      setEndDate(date);
    } else {
      setEndDate(null);
      setStartDate(date);
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <Calendar
            selectedDate={startDate}
            onDateClick={handleStartDateClick}
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Calendar selectedDate={endDate} onDateClick={handleEndDateClick} />
        </div>
      </div>
    </div>
  );
};
