import React, { useState } from 'react';
import { Box, Stack, Tooltip, Typography } from '@mui/joy';
import { styled } from '@mui/system';

interface DataPoint {
  date: string;
  price: number;
}

function generateMockData(startDate: string, numDays: number, minPrice: number): DataPoint[] {
  const data: DataPoint[] = [];
  const start = new Date(startDate);

  for (let i = 0; i < numDays; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);

    const dateStr = currentDate.toISOString().split('T')[0];
    const price = (Math.random() * 100).toFixed(1);
    const finalPrice = Math.max(parseFloat(price), minPrice);

    data.push({ date: dateStr, price: finalPrice });
  }

  return data;
}

const twoMonthsData = generateMockData('2024-04-01', 60, 10); // Ensure minimum price is 10
const minPrice = Math.min(...twoMonthsData.map(data => data.price));

const Bar = styled('div')(({ selected, isMinPrice }) => ({
  
  cursor: 'pointer',
  
  width: '25px',
  borderRadius: '4px 4px 0 0 ',
  backgroundColor: isMinPrice ? 'green' : selected ? 'var(--joy-palette-primary-solidBg)' : 'var(--joy-palette-primary-softBg)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: isMinPrice ? 'darkgreen' : 'var(--joy-palette-primary-softHoverBg)',
  },
}));

const PriceBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
  alignItems: 'flex-end',
  position: 'relative',

  paddingBottom: '10px',
  
  height: 'auto',
  scrollbarWidth: 'none',
  width: '100%', // Ensure the container takes the full width of the parent
});

const Divider = styled('div')({
  width: '2px',
  height: '10px',
  backgroundColor: 'var(--joy-palette-primary-softBg)',
  position: 'absolute',
  bottom: '-10px',
});

const PriceChart = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleClick = (date: string) => {
    setSelectedDate(date);
  };

  const getMonthLabel = (date: string) => {
    const monthNames = ["Янв", "Фев", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const monthIndex = new Date(date).getMonth();
    return monthNames[monthIndex];
  };

  const monthDividers = twoMonthsData.reduce((acc, dataPoint, index) => {
    const currentMonth = new Date(dataPoint.date).getMonth();
    if (acc.prevMonth !== currentMonth) {
      acc.dividers.push({ index, month: getMonthLabel(dataPoint.date) });
      acc.prevMonth = currentMonth;
    }
    return acc;
  }, { prevMonth: -1, dividers: [] });

  return (
    <>
    <Box sx={{ overflowX: 'auto', maxWidth: '100%', height: '190px', px:4 , scrollbarWidth: 'thin', scrollbarColor: 'var(--joy-palette-primary-solidBg)' }}> {/* Ensure parent container is scrollable */}
      <PriceBox>
        {twoMonthsData.map((dataPoint, i) => (
          <Stack key={dataPoint.date} justifyContent="center" alignItems="center" sx={{  borderBottom: '2px solid var(--joy-palette-primary-softBg)',}}>
             <Tooltip title={<>
             <Typography level='body-xs' textColor="background.popup">
             Date: {dataPoint.date},
             </Typography>
             <Typography level='body-xs' textColor="background.popup">
             Price: {dataPoint.price}
              </Typography>
             </>}>
            <Bar
              selected={selectedDate === dataPoint.date}
              isMinPrice={dataPoint.price === minPrice}
              onClick={() => handleClick(dataPoint.date)}
              sx={{ height: `${dataPoint.price}px` }}
            />
            </Tooltip>
            <Typography level="body-xs">{new Date(dataPoint.date).getDate()}</Typography>
            {monthDividers.dividers.some(divider => divider.index === i) && (
              <Divider style={{ left: `${i * 29}px` }} />
            )}
          </Stack>
        ))}
      </PriceBox>
      <Box sx={{ position: 'relative', mt: 1, width: `${twoMonthsData.length * 29}px` }}>
        {monthDividers.dividers.map((divider, index) => (
          <Typography
            key={index}
            level="body-sm"
            sx={{ position: 'absolute', left: `${divider.index * 29}px`, transform: 'translateX(-50%)' }}
          >
            {divider.month}
          </Typography>
        ))}
      </Box>
    
    </Box>
      {selectedDate && (
        <Typography level="body-xs" >
          Selected Date: {selectedDate}
        </Typography>
      )}
    </>
  );
};

export default PriceChart;
