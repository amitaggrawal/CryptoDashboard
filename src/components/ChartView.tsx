import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export type PriceData = {
  date: string;
  price: number;
};

interface ChartViewProps {
  data: PriceData[];
  compareData?: PriceData[] | null;
  compareAsset?: string;
}

const COLORS = [
  'rgba(75,192,192,1)', // main
  'rgba(139,92,246,1)', // compare (indigo-500)
];
const BG_COLORS = [
  'rgba(75,192,192,0.2)',
  'rgba(139,92,246,0.15)',
];

const ChartView: React.FC<ChartViewProps> = ({ data, compareData, compareAsset }) => {
  const labels = data.map((d) => d.date);
  const datasets = [
    {
      label: 'Price (USD)',
      data: data.map((d) => d.price),
      borderColor: COLORS[0],
      backgroundColor: BG_COLORS[0],
      fill: true,
      tension: 0.2,
    },
  ];
  if (compareData && compareAsset) {
    datasets.push({
      label: `Compare (${compareAsset.toUpperCase()})`,
      data: compareData.map((d) => d.price),
      borderColor: COLORS[1],
      backgroundColor: BG_COLORS[1],
      fill: false,
      tension: 0.2,
    });
  }
  return (
    <Line
      data={{
        labels,
        datasets,
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: true, position: 'top' as const },
          title: { display: false },
        },
        scales: {
          x: { title: { display: true, text: 'Date' } },
          y: { title: { display: true, text: 'USD' } },
        },
      }}
    />
  );
};

export default ChartView; 