import { BeachAccess, Restaurant, Hotel, Wifi, SportsSoccer, Pool, ChildCare, HealthAndSafety, DirectionsCar, BusinessCenter, LocalLaundryService, LocalOffer } from '@mui/icons-material';
import { Box, Typography, Grid, List, ListItem } from '@mui/joy';

const services = [
    {
        category: 'Питание:',
        icon: <Restaurant />,
        items: ['Диетическое меню', 'Ресторан', 'Бар', 'Шведский стол', 'Бар у бассейна'],
    },
    {
        category: 'Пляж:',
        icon: <BeachAccess />,
        items: ['Частный пляж', '1-ая пляжная линия', 'Песок жёлтый', 'Галька'],
    },
    {
        category: 'Удобства в номерах:',
        icon: <Hotel />,
        items: ['Сейф', 'Кондиционер', 'Терраса', 'Фен', 'Телевизор', 'Мини-бар', 'Телефон', 'Душ'],
    },
    {
        category: 'Интернет:',
        icon: <Wifi />,
        items: ['Wi-Fi'],
    },
    {
        category: 'Спорт:',
        icon: <SportsSoccer />,
        items: ['Настольный теннис', 'Волейбол', 'Футбол', 'Групповые занятия'],
    },
    {
        category: 'Бассейн:',
        icon: <Pool />,
        items: ['Крытый бассейн', 'Открытый бассейн', 'Бассейн с подогревом'],
    },
    {
        category: 'Услуги для детей:',
        icon: <ChildCare />,
        items: ['Детская площадка', 'Детский клуб', 'Детский бассейн'],
    },
    {
        category: 'Здоровье и красота:',
        icon: <HealthAndSafety />,
        items: ['Массаж', 'Сауна', 'Спа и оздоровительный центр', 'Паровая баня', 'Гидромассажная ванна', 'Салон красоты', 'Кабинет врача'],
    },
    {
        category: 'Транспорт:',
        icon: <DirectionsCar />,
        items: ['Трансфер', 'Аренда лимузина'],
    },
    {
        category: 'Бизнес-услуги:',
        icon: <BusinessCenter />,
        items: ['Конференц-зал'],
    },
    {
        category: 'Услуги по чистке одежды:',
        icon: <LocalLaundryService />,
        items: ['Прачечная'],
    },
    {
        category: 'Общие услуги:',
        icon: <LocalOffer />,
        items: ['Банкомат', 'Сад', 'Магазины в отеле', 'Банкетный зал'],
    },
];

export default function HotelServices() {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography level='title-md' gutterBottom>
                Все услуги отеля
            </Typography>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid xs={12} sm={6} md={4} key={index}>
                        <Typography level='title-md' gutterBottom>
                            {service.icon} {service.category}
                        </Typography>
                        <List size='sm'>
                            {service.items.map((item, idx) => (
                                <ListItem key={idx} disableGutters>
                                    <Typography>{item}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};