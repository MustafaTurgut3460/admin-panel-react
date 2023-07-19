import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import BigModal from '../BigModal';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
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
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Okuma',
            data: [10.5, 11, 11.2, 5.6, 7.8, 7.2, 12],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderRadius: 6,
            borderSkipped: false,
        },
        {
            label: 'Yazma',
            data: [4.5, 5, 3.2, 4.6, 2.8, 7.2, 4.3],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.4,
            borderRadius: 6,
            borderSkipped: false,
        },
    ],

};


const DashboardBarChart = () => {
    const [open, setOpen] = useState(false);

    return (


        <><Bar options={options} data={data} onClick={() => setOpen(true)} />
        <BigModal element={<Bar options={options} data={data}/>} open={open} setOpen={setOpen} title='Aylara Göre Erişim Miktarı Detay' /></>



    );

}

export default DashboardBarChart;