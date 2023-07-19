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
import { Dropdown, MenuProps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Normal Kullanıcılar',
            data: [15, 25, 22, 11, 14, 16, 17, 20],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.4
        },
        {
            label: 'Premimum Kullanıcılar',
            data: [15, 20, 18, 12, 15, 21, 17, 20],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
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


const DashboardLineChart = () => {
    const [open, setOpen] = useState(false);

    return (
        <>

            <Line options={options} data={data} onClick={() => setOpen(true)}/>
            <BigModal element={<Line options={options} data={data} />} open={open} setOpen={setOpen} title='Aylara Göre Erişim Miktarı Detay' />,

        </>
    );
};

export default DashboardLineChart;
