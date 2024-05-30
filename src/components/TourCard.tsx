import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Card, Grid, Link, Stack, Typography ,Chip} from "@mui/joy";


export default function TourCard() {
  return (
    <Card
      sx={{
        display: "flex",
        padding: 2,
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0",
        border: 0,
      }}
    >
      <Grid container spacing={2} alignItems="center" width="100%" flexGrow="1">
        <Grid xs={4} md={2}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography level="h1">29</Typography>
            <Typography level="body-sm">май, ср</Typography>
          </Box>
        </Grid>
        <Grid xs={4} md={1} >
          <Stack>
            <Typography
              level="body-sm"
              textAlign="center"
              sx={{ textWrap: "nowrap" }}
            >
              7 ночей
            </Typography>

           
          </Stack>
        </Grid>
        <Grid xs={4} md={2}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography level="h1">5</Typography>
            <Typography level="body-sm">июн, ср</Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
          <Box display="flex" flexDirection="column">
            <Typography level="title-md">Улучшенный номер</Typography>
            <Typography gutterBottom level="body-xs">Все включено, AI</Typography>
            <Link ><Typography level="body-xs">Подробнее о номере →</Typography></Link>
             
          </Box>
        </Grid>
        <Grid xs={12} md={3}>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography level="body-md" textColor="text.secondary">
              Let's Fly
            </Typography>
            <Typography gutterBottom level="body-sm" textColor="text.secondary">
              24 536 ₽/ночь
            </Typography>
            <Chip variant="solid" color="primary">

           
        
                от 171 747 ₽
        
              </Chip>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
