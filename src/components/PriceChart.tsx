import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    '28', '29', '30', '31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
    '25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8'
  ],
  datasets: [
    {
      label: 'Цена',
      data: [
        10, 20, 15, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100,
        95, 110, 105, 120, 115, 130, 125, 140, 135, 150, 145, 160, 155, 170, 165, 180,
        175, 190, 185, 200, 195, 210, 205, 220, 215, 230
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    
    title: {
      display: true,
      text: 'График низких цен на туры в Египет для 2 взрослых с вылетом из Нижнего на 7 ночей',
    },
  },
  scales: {
    x: {
        grid: {
            display: false
        },
      title: {
        display: true,
        text: 'Май 24 - Июль 24',
      },
    },
    y: {
        grid: {
            display: false
        },
      title: {
        display: true,
        text: 'Цена',
      },
    },
  },
};

const PriceChart = () => {
  return (
    <Box sx={{ padding: 3 }}>
     
      <Bar data={data} options={options} />
    </Box>
  );
};

export default PriceChart;
