import React from 'react';
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
// import faker from 'faker';

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
    maintainAspectRatio: false,
    elements: {
        line: {
            tension: 0
        }
    },
    plugins: {
        // legend: {
        //   position: 'top' as const,
        // },
        // title: {
        //   display: true,
        //   text: 'Chart.js Line Chart',
        // },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Всего инвестировано',
            lineTension: 0.3,
            data: [2500, 5000, 2300, 6000, 7000, 8000, 10000],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const ChartComponent = () => {
    return <Line options={options} data={data} width={"288px"} height={'288px'}/>;
}

export default ChartComponent;