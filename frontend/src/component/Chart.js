import React from 'react';
import { Line } from 'react-chartjs-2';

function Chart() {
  const data = {
    labels: [
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
      '일요일',
    ],

    datasets: [
      {
        label: 'kcal',
        fill: 'origin',
        lineTension: 0.1,
        backgroundColor: 'rgba(226,231,251,1)',
        borderColor: 'rgba(86,115,234,1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(86,115,234,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 15,
        pointHoverBackgroundColor: 'rgba(86,115,234,1)',
        pointHoverBorderColor: 'rgba(86,115,234,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100, 27, 300, 364, 274, 176, 685],
      },
    ],
  };
  return (
    <Line
      data={data}
      width={570}
      height={300}
      options={{ maintainAspectRatio: true }}
    />
  );
}

export default Chart;
