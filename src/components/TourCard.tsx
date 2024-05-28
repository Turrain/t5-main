import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Card, Grid, Link, Stack, Typography } from "@mui/joy";

export default function TourCard() {
  return (
    <Card
      sx={{
        display: "flex",
        padding: 2,
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
        border: 0,
      }}
    >
      <Grid container spacing={2} alignItems="center" width="100%" flexGrow="1">
        <Grid xs={12} md={2}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography level="h1">29</Typography>
            <Typography level="body-sm">май, ср</Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={1}>
          <Stack>
            <Typography
              level="body-sm"
              textAlign="center"
              sx={{ textWrap: "nowrap" }}
            >
              7 ночей
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <ArrowBack fontSize="8" />
              <ArrowForward fontSize="8" />
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12} md={2}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography level="h1">5</Typography>
            <Typography level="body-sm">июн, ср</Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
          <Box display="flex" flexDirection="column">
            <Typography level="h3">Улучшенный номер</Typography>
            <Typography level="body-sm">Все включено, AI</Typography>
            <Link> Подробнее о номере →</Link>
          </Box>
        </Grid>
        <Grid xs={12} md={3}>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography level="body-md" textColor="text.secondary">
              Let's Fly
            </Typography>
            <Typography level="body-md" textColor="text.secondary">
              24 536 ₽/ночь
            </Typography>
            <Box
              sx={{
                padding: "8px 16px",
              }}
            >
              <Typography level="title-lg" color="primary">
                от 171 747 ₽
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
