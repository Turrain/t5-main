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

export const Calendar = ({
  selectedDate,
  onDateClick,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onDateRangeSelect,
}) => {
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());

  const handleDateClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (dayjs(day).isAfter(startDate)) {
        setEndDate(day);
      } else {
        setEndDate(null);
        setStartDate(day);
      }
    }
  };
  const isDateInRange = (date, startMonth, endMonth, startDay, endDay) => {
    const month = date.month() + 1; // Adding 1 because month() returns 0-indexed month
    const day = date.date();
  
    return month >= startMonth && month <= endMonth && day >= startDay && day <= endDay;
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
        <Button variant="plain" sx={{ width: "100%" }}>
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
                      sx={{
                        backgroundColor:
                          day && day >= startDate && day <= endDate 
                            ? "primary.solidBg"
                            : "",
                       
                       
                        px: 1,
                        height: 50,
                        width: 50,
                      }}
                      onClick={() => day && handleDateClick(day)}
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
                            <Typography level="body-md" sx={{ lineHeight: 1,  color:   day >= startDate && day <= endDate
                        ? "#fff"
                        : "", }}>
                              {day}
                            </Typography>
                            <Typography level="body-xs" sx={{ fontSize: 9,  color:   day >= startDate && day <= endDate
                        ? "#fff"
                        : "", }}>
                              {day >= startDate && day <= endDate
                                ? "Yis"
                                : "no"}
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

  const handleDateRangeSelect = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      setEndDate(date);
    }
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <Calendar
            selectedDate={startDate}
            onDateClick={handleStartDateClick}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            onDateRangeSelect={handleDateRangeSelect}
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Calendar
            selectedDate={endDate}
            onDateClick={handleEndDateClick}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            onDateRangeSelect={handleDateRangeSelect}
          />
        </div>
      </div>
    </div>
  );
};
