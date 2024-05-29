
import { NightsStay } from "@mui/icons-material";
import { Card, Stack, Typography, Divider, Grid, Checkbox, Button } from "@mui/joy";

export default function TourFilters(){
    return (
        <Card
        sx={{
          display: 'flex',
          padding: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 ',
          border: 0
        }}
      >
        <Stack
          direction="column"
          spacing={1}
          width="100%"
        >
          <Typography level="title-md">Фильтры</Typography>
          <Divider />
          <Typography level="body-md">Дата заселения</Typography>
          <Grid
            container
            spacing={2}
            alignItems="center"
            rowGap="6px"
          >
            <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
              <Button
                variant="outlined"
                sx={{
                  p: 0.3
                }}
              >
                <Stack direction='column'>
                  <Typography level="body-xs" fontSize='12px'>
                    15 июн, сб
                  </Typography>
                  <Typography level="body-xs" fontSize='10px'>
                    от 135 089 Р
                  </Typography>
                  <Typography level="body-xs" fontSize='10px'>
                    от 19 299 Р/ночь
                  </Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
              <Button
                variant="outlined"
                sx={{
                  p: 0.3
                }}
              >
                <Stack direction='column'>
                  <Typography level="body-xs" fontSize='12px'>
                    15 июн, сб
                  </Typography>
                  <Typography level="body-xs" fontSize='10px'>
                    от 135 089 Р
                  </Typography>
                  <Typography level="body-xs" fontSize='10px'>
                    от 19 299 Р/ночь
                  </Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
              <Button
                variant="outlined"
                sx={{
                  p: 0.3
                }}
              >
                <Stack direction='column'>
                  <Typography level="body-xs" fontSize='12px'>
                    15 июн, сб
                  </Typography>
                  <Typography level="body-xs" fontSize='10px'>
                    от 135 089 Р
                  </Typography>
                  <Typography level="body-xs" fontSize='10px'>
                    от 192 299 Р/ночь
                  </Typography>
                </Stack>
              </Button>
            </Grid>
          </Grid>

          <Divider />

          <Typography level="body-md">Количество ночей</Typography>
          <Grid
            container
            spacing={2}
            alignItems="center"
          >
            <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
              <Button
                variant="outlined"
                sx={{
                  p: 0.5
                }}
              >
                <Stack direction='column'>
                  <Stack direction="row" spacing={1}>
                    <NightsStay fontSize="8" />
                    <Typography level="title-sm" fontSize='12px'>
                      7 ночей
                    </Typography>
                  </Stack>
                  <Typography level="body-xs" fontSize='10px'>
                    от 192 299 Р/ночь
                  </Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid xs={12} md={6} display="flex" justifyContent="center" p="0">
              <Button
                variant="outlined"
                sx={{
                  p: 0.5
                }}
              >
                <Stack direction='column'>
                  <Stack direction="row" spacing={1}>
                    <NightsStay fontSize="8" />
                    <Typography level="title-sm" fontSize='12px'>
                      8 ночей
                    </Typography>
                  </Stack>
                  <Typography level="body-xs" fontSize='10px'>
                    от 192 299 Р/ночь
                  </Typography>
                </Stack>
              </Button>
            </Grid>
          </Grid>

          <Divider />

          <Typography level="body-md">Тип номера</Typography>
          <Stack>
            <Checkbox label='Улучшенный номер' size="sm" />
            <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
          </Stack>
          <Stack>
            <Checkbox label='Улучшенный номер с видом на бассейн' size="sm" />
            <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
          </Stack>
          <Stack>
            <Checkbox label='Улучшенный номер с видом на море' size="sm" />
            <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
          </Stack>
          <Stack>
            <Checkbox label='Семейный номер' size="sm" />
            <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
          </Stack>
          <Stack>
            <Checkbox label='Полулюкс' size="sm" />
            <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
          </Stack>
          <Stack>
            <Checkbox label='Sea View' size="sm" />
            <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
          </Stack>

          <Divider />

          <Stack>
            <Checkbox label='Туры с онлайн-оплатой' size="sm" />
            <Typography level="body-xs" pl="32px">от 123 456 Р</Typography>
          </Stack>

          <Divider />

          <Typography level="body-md">Туроператор</Typography>
        </Stack>
      </Card>
    )
}