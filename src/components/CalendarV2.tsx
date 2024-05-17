import React, { useState } from "react";
import dayjs from "dayjs";
import { Box, Button, IconButton, Stack, Typography } from "@mui/joy";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);
import "dayjs/locale/ru";
dayjs.locale("ru");
import isBetween from "dayjs/plugin/isBetween";
import { Popover } from "@mui/material";
import { useDateStore } from "./store/DateStore";
dayjs.extend(isBetween);
const daysInMonth = (year: number, month: number) => {
  return dayjs(`${year}-${month + 1}-01`).daysInMonth();
};

const generateCalendar = (year: number, month: number) => {
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

export const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [hoverDate, setHoverDate] = useState<string | null>(null);
  const { startDate, endDate, handleDateClick } = useDateStore();
  const handleMouseEnter = (day: string) => {
    if (startDate && !endDate) {
      setHoverDate(day);
    }
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
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <IconButton onClick={prevMonth}>
            <ArrowLeft />
          </IconButton>
          <Button variant="plain">
            <Stack direction="row" spacing={1}>
              <Typography level="body-sm">
                {dayjs().month(currentMonth).format("MMMM").toUpperCase()}
              </Typography>
              <Typography level="body-sm">
                {dayjs().year(currentYear).format("YYYY")}
              </Typography>
            </Stack>
          </Button>
          <IconButton onClick={nextMonth}>
            <ArrowRight />
          </IconButton>
        </Stack>
        <table>
          <thead>
            <tr>
              <th>
                <Typography level="body-sm" fontWeight="400" color="danger">
                  Вс
                </Typography>
              </th>
              <th>
                <Typography level="body-sm" fontWeight="400" color="primary">
                  Пн
                </Typography>
              </th>
              <th>
                <Typography level="body-sm" fontWeight="400" color="primary">
                  Вт
                </Typography>
              </th>
              <th>
                <Typography level="body-sm" fontWeight="400" color="primary">
                  Ср
                </Typography>
              </th>
              <th>
                <Typography level="body-sm" fontWeight="400" color="primary">
                  Чт
                </Typography>
              </th>
              <th>
                <Typography level="body-sm" fontWeight="400" color="primary">
                  Пт
                </Typography>
              </th>
              <th>
                <Typography level="body-sm" fontWeight="400" color="danger">
                  Сб
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {calendarRows.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => {
                  const fullDate = dayjs(
                    `${currentYear}-${currentMonth + 1}-${day}`
                  ).format("YYYY-MM-DD");

                  const isSelected =
                    day &&
                    startDate &&
                    endDate &&
                    dayjs(fullDate).isSameOrAfter(startDate) &&
                    dayjs(fullDate).isSameOrBefore(endDate);
                  const isHovering =
                    startDate &&
                    !endDate &&
                    hoverDate &&
                    dayjs(fullDate).isBetween(startDate, hoverDate, null, "[]");

                  const isPrevious = dayjs(fullDate).isSameOrBefore(
                    dayjs().add(-1, "day")
                  );
                  return (
                    <td key={dayIndex}>
                      <Button
                        variant={isSelected ? "solid" : "outlined"}
                        sx={{
                          backgroundColor:
                            isHovering && day ? "primary.plainActiveBg" : "",
                          outline:
                            fullDate == dayjs().format("YYYY-MM-DD")
                              ? "2px solid red"
                              : "",
                          px: 1,
                          height: 40,
                          width: 40,
                        }}
                        onClick={() => day && handleDateClick(fullDate)}
                        disabled={!day || isPrevious}
                        onMouseEnter={() => handleMouseEnter(fullDate)}
                      >
                        <Stack
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {day && (
                            <>
                              <Typography
                                level="body-sm"
                                sx={{
                                  lineHeight: 1,
                                  color: isSelected ? "#fff" : "",
                                  textDecoration: isPrevious
                                    ? "line-through"
                                    : "",
                                }}
                              >
                                {day}
                              </Typography>
                              <Typography
                                level="body-xs"
                                sx={{
                                  fontSize: 9,
                                  color: isSelected ? "#fff" : "",
                                }}
                              >
                                {isSelected ? "Yes" : "No"}
                              </Typography>
                            </>
                          )}
                        </Stack>
                      </Button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export function Trigger2() {
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
        16 мая - 22 мая
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
        <Box>
          <div style={{ display: "flex" }}>
            <div>
              <Calendar />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <Calendar />
            </div>
          </div>
        </Box>
      </Popover>
    </>
  );
}
