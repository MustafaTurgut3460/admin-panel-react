import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Normal Users', 'Premium Users'],
    datasets: [
        {
            label: '# of Votes',
            data: [451, 123],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const DatabasePieChart = () => {
    return <Pie data={data} style={{marginTop: "1rem"}}/>;
}

export default DatabasePieChart;