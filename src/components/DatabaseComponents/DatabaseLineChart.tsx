import React, { useState } from 'react';
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
import { Line } from 'react-chartjs-2';
import BigModal from '../BigModal';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Reklamlar',
            data: [15, 25, 22, 11, 14, 16, 17, 20, 11, 12, 13, 10, 9],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.4
        },
        {
            label: 'Premimum',
            data: [15, 20, 18, 12, 15, 21, 17, 20, 15, 16, 11, 12, 10],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.4
        },
        {
            label: 'Toplam',
            data: [30, 45, 40, 23, 29, 37, 34, 40, 36, 28, 24, 22, 19],
            borderColor: 'rgba(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            tension: 0.4
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};


const DatabaseLineChart = () => {
    const [open, setOpen] = useState(false);


    return <>
        <Line options={options} data={data} onClick={() => setOpen(true)}/>
        <BigModal element={<Line options={options} data={data} />} open={open} setOpen={setOpen} title='Aylara Göre Kazanç Miktarı' />
    </>;
};

export default DatabaseLineChart;
