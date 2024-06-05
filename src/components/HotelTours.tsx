import { FlightTakeoff, Luggage } from "@mui/icons-material";
import { Box, Button, Chip, Sheet, Stack, Typography } from "@mui/joy";

export default function HotelTours () {
    return (
        <>
        <Stack>
        <Box sx={{ display: "flex", px: 4 }}>
          <Typography
            sx={{ borderRadius: "4px 4px 0 0", px: 1 }}
            color="primary"
            variant="solid"
            level="body-xs"
          >
            Дешевый
          </Typography>
        </Box>

        <Sheet
          variant="soft"
          sx={{
            p: 1,
            borderRadius: 10,
            mb: 2,
            border: "2px solid var(--joy-palette-primary-outlinedColor)",
          }}
        >
          <Stack direction="row" gap={1}>
            <Stack gap={1}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  alignItems: "center",
                  height: 80,
                }}
              >
                <Box>
                  <FlightTakeoff />
                </Box>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack justifyContent="center" gap={0.5}>
                  <Typography level="body-xs"> всего 9ч 15мин</Typography>
                  <Stack direction="row">
                    <Chip variant="soft" color="primary" size="sm">
                      SVO
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      KZN
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      AST
                    </Chip>
                  </Stack>
                  <Chip variant="solid" color="primary" size="sm">
                    Без пересадок
                  </Chip>
                </Stack>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack>
                  <Typography level="h3">Pobeda+</Typography>
                  <Typography level="body-xs"> Рейс № 6895</Typography>
                  <Typography level="body-xs"> ECONOM</Typography>
                </Stack>
                <Stack>
                  <Luggage fontSize="large" color="error" />
                  <Typography level="body-xs">Включена ручная кладь</Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  alignItems: "center",
                  height: 80,
                }}
              >
                <Box>
                  <FlightTakeoff />
                </Box>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack justifyContent="center" gap={0.5}>
                  <Typography level="body-xs"> всего 9ч 15мин</Typography>
                  <Stack direction="row">
                    <Chip variant="soft" color="primary" size="sm">
                      SVO
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      KZN
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      AST
                    </Chip>
                  </Stack>
                  <Chip variant="solid" color="primary" size="sm">
                    Без пересадок
                  </Chip>
                </Stack>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack>
                  <Typography level="h3">Pobeda+</Typography>
                  <Typography level="body-xs"> Рейс № 6895</Typography>
                  <Typography level="body-xs"> ECONOM</Typography>
                </Stack>
                <Stack>
                  <Luggage fontSize="large" color="error" />

                  <Typography level="body-xs">Включена ручная кладь</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{ flex: 1, backgroundColor: "#fff", p: 1, borderRadius: 8 }}
            >
              <Stack flex={1} direction="row" justifyContent="space-evenly">
                <Stack alignItems="flex-end">
                  <Typography level="body-md" color="primary" fontWeight={700}>
                    {" "}
                    ДОПЛАТА
                  </Typography>
                  <Typography level="h2"> 0 Р</Typography>
                </Stack>

                <Stack alignItems="flex-end">
                  <Typography level="body-md" color="primary" fontWeight={700}>
                    {" "}
                    ЦЕНА ТУРА
                  </Typography>
                  <Typography level="h2"> 300 000 Р</Typography>
                </Stack>
              </Stack>
              <Button sx={{ width: "90%", margin: "auto" }}>
                Забронировать
              </Button>
            </Stack>
          </Stack>
        </Sheet>
      </Stack>
      <Stack>
        <Box sx={{ display: "flex", px: 4 }}></Box>

        <Sheet
          variant="soft"
          sx={{
            p: 1,
            borderRadius: 10,
            mb: 2,
          }}
        >
          <Stack direction="row" gap={1}>
            <Stack gap={1}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  alignItems: "center",
                  height: 80,
                }}
              >
                <Box>
                  <FlightTakeoff />
                </Box>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack justifyContent="center" gap={0.5}>
                  <Typography level="body-xs"> всего 9ч 15мин</Typography>
                  <Stack direction="row">
                    <Chip variant="soft" color="primary" size="sm">
                      SVO
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      KZN
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      AST
                    </Chip>
                  </Stack>
                  <Chip variant="solid" color="primary" size="sm">
                    Без пересадок
                  </Chip>
                </Stack>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack>
                  <Typography level="h3">Pobeda+</Typography>
                  <Typography level="body-xs"> Рейс № 6895</Typography>
                  <Typography level="body-xs"> ECONOM</Typography>
                </Stack>
                <Stack>
                  <Luggage fontSize="large" color="error" />
                  <Typography level="body-xs">Включена ручная кладь</Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  alignItems: "center",
                  height: 80,
                }}
              >
                <Box>
                  <FlightTakeoff />
                </Box>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack justifyContent="center" gap={0.5}>
                  <Typography level="body-xs"> всего 9ч 15мин</Typography>
                  <Stack direction="row">
                    <Chip variant="soft" color="primary" size="sm">
                      SVO
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      KZN
                    </Chip>
                    <Chip variant="soft" color="primary" size="sm">
                      AST
                    </Chip>
                  </Stack>
                  <Chip variant="solid" color="primary" size="sm">
                    Без пересадок
                  </Chip>
                </Stack>
                <Stack>
                  <Typography level="h2"> 22: 25</Typography>
                  <Typography level="body-xs"> 31 мая, пт</Typography>
                  <Typography level="body-xs"> Москва</Typography>
                </Stack>
                <Stack>
                  <Typography level="h3">Pobeda+</Typography>
                  <Typography level="body-xs"> Рейс № 6895</Typography>
                  <Typography level="body-xs"> ECONOM</Typography>
                </Stack>
                <Stack>
                  <Luggage fontSize="large" color="error" />

                  <Typography level="body-xs">Включена ручная кладь</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{ flex: 1, backgroundColor: "#fff", p: 1, borderRadius: 8 }}
            >
              <Stack flex={1} direction="row" justifyContent="space-evenly">
                <Stack alignItems="flex-end">
                  <Typography level="body-md" color="primary" fontWeight={700}>
                    {" "}
                    ДОПЛАТА
                  </Typography>
                  <Typography level="h2"> 0 Р</Typography>
                </Stack>

                <Stack alignItems="flex-end">
                  <Typography level="body-md" color="primary" fontWeight={700}>
                    {" "}
                    ЦЕНА ТУРА
                  </Typography>
                  <Typography level="h2"> 300 000 Р</Typography>
                </Stack>
              </Stack>
              <Button sx={{ width: "90%", margin: "auto" }}>
                Забронировать
              </Button>
            </Stack>
          </Stack>
        </Sheet>
      </Stack>
      </>
    )
}