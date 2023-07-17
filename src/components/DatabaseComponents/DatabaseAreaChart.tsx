import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Yeni Kullanıcı Sayısı',
      data: [331, 320, 376, 245, 215, 290, 344],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4
    },
    {
        fill: true,
        label: 'Yeni Premium Kullanıcı Sayısı',
        data: [120, 144, 122, 85, 90, 110, 221],
        borderColor: 'rgb(38, 231, 70)',
        backgroundColor: 'rgba(38, 231, 70, 0.5)',
        tension: 0.4
      },
  ],
};

const DatabaseAreaChart = () => {
    return <Line options={options} data={data} style={{marginTop: "1rem"}}/>;
}

export default DatabaseAreaChart;