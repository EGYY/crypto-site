import React, { FC } from 'react';
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

const ChartComponent:FC<any> = ({data}) => {
    return <Line options={options} data={data} width={"288px"} height={'288px'}/>;
}

export default ChartComponent;