import { BeachAccess, Wifi, TransferWithinAStation, ChildCare, LocalHospital, Lock } from "@mui/icons-material";
import { Typography, Box, Grid, Button, List, ListItem, Link } from "@mui/joy";
import React from "react";

export const ShowMoreContainer = ({ children, maxHeight, defaultOpen = false }) => {
    const [showMore, setShowMore] = React.useState(defaultOpen);
    const contentRef = React.useRef(null);
    const [height, setHeight] = React.useState(maxHeight);

    React.useEffect(() => {
        if (showMore) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(maxHeight);
        }
    }, [showMore, maxHeight]);

    const handleClick = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <Box
                ref={contentRef}
                sx={{
                    maxHeight: height,
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease',
                }}
            >
                {children}
            </Box>
            <Link level="body-sm" onClick={handleClick} sx={{width: '100%'}} >
                {showMore ? 'Скрыть' : 'Подробнее'}
            </Link>
        </>
    );
};

export default function HotelInfo() {
    return (
        <ShowMoreContainer maxHeight="300px">
            <Box
                sx={{
                    padding: 3,
                }}
            >
              
                <Grid container spacing={2} justifyContent="center">
                    <Grid>
                        <Box textAlign="center">
                            <BeachAccess fontSize="large" color="primary" />
                            <Typography>1-ая пляжная линия</Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box textAlign="center">
                            <Wifi fontSize="large" color="primary" />
                            <Typography>Wi-Fi</Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box textAlign="center">
                            <TransferWithinAStation fontSize="large" color="primary" />
                            <Typography>Трансфер</Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box textAlign="center">
                            <ChildCare fontSize="large" color="primary" />
                            <Typography>Детский бассейн</Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box textAlign="center">
                            <LocalHospital fontSize="large" color="primary" />
                            <Typography>Кабинет врача</Typography>
                        </Box>
                    </Grid>
                    <Grid>
                        <Box textAlign="center">
                            <Lock fontSize="large" color="primary" />
                            <Typography>Сейф</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={4}>
                    <Typography level="h4" gutterBottom>
                        Расположение отеля
                    </Typography>
                    <Typography level="body-md" gutterBottom>
                        Отель Tamra Beach Resort расположен в 7 км от аэропорта Шарм-Эль-Шейха, в бухте Набк Бей.
                    </Typography>
                    <Typography level="h4" gutterBottom>
                        Номерной фонд гостиницы Tamra Beach Resort
                    </Typography>
                    <Typography level="body-md" gutterBottom>
                        Для размещения предлагается 305 номеров.
                    </Typography>
                    <Typography level="body-md" gutterBottom>Во всех номерах есть:</Typography>
                    <List>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>санузел с душем;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>фен;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>туалетно-косметические принадлежности;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>телефон;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>телевизор;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>кондиционер;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>мини-бар;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>балкон/терраса;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>сейф.</Typography>
                        </ListItem>
                    </List>
                    <Typography level="body-md" gutterBottom>Доступны семейные номера</Typography>
                    <Typography level="h4" gutterBottom>
                        Питание
                    </Typography>
                    <Typography level="body-md" gutterBottom>
                        Доступны следующие концепции питания:
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                All Incluisive (AI) — «все включено», трехразовое питание по системе «шведский стол» в главном ресторане отеля, местные алкогольные и безалкогольные напитки, мороженое и закуски в течение дня.
                            </Typography>
                        </ListItem>
                    </List>
                    <Typography level="body-md" gutterBottom>
                        На территории отеля работают главный ресторан Tiran, 2 бара у бассейна, пиццерия, бар Tamra Beach Club House.
                    </Typography>
                    <Typography level="h4" gutterBottom>
                        Удобства и развлечения в отеле «Тамра Бич Ризот»
                    </Typography>
                    <Typography level="body-md" gutterBottom>
                        К услугам гостей:
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                5 открытых бассейнов, 1 из них с подогревом в зимний период;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                спа-центр (сауна, паровая баня, массаж, джакузи, салон красоты, крытый бассейн);
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                дайвинг-центр;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                уроки танцев, водное поло, водные игры, настольные игры, шахматы, стрельба из лука, дартс;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                волейбол, футбол;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                катание на верблюдах;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                настольный теннис;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                залы для проведения мероприятий;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                экскурсии.
                            </Typography>
                        </ListItem>
                    </List>
                    <Typography level="h4" gutterBottom>
                        Услуги для детей
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                детский бассейн;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                мини-клуб;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                детская площадка.
                            </Typography>
                        </ListItem>
                    </List>
                    <Typography level="h4" gutterBottom>
                        Пляж
                    </Typography>
                    <Typography level="body-md" gutterBottom>
                        Пляж частный, оборудованный, песчано-галечный.
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                1-я пляжная линия;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                есть кораллы, рекомендуется специальная обувь;
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography level="body-md" gutterBottom>
                                шезлонги, зонтики, полотенца — бесплатно.
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </ShowMoreContainer>
    );
};