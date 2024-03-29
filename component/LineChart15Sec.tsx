import { useCallback, useEffect, useState, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

import { options } from './const';

type Props = {
  autoUpdate: boolean;
  data: number[];
};

function LineChart15Sec({ autoUpdate, data }: Props) {
  const chartRef2 = useRef<ChartJS<'line'>>(null);
  const currentTime = dayjs();
  const [maxLength, setMaxLength] = useState(30);

  const labels = Array.from(new Array(maxLength), (_, index) => {
    const diffTime = (maxLength - 1 - index) * 5;
    const diff = currentTime.subtract(diffTime, 's');
    return diff.format('mm:ss');
  });

  const enqueueWidthAutoDequeue = useCallback(() => {
    if (!chartRef2.current || !autoUpdate) {
      return;
    }
    const chart = chartRef2.current;

    const currentTime = [
      dayjs().subtract(10, 's').format('mm:ss'),
      dayjs().subtract(5, 's').format('mm:ss'),
      dayjs().format('mm:ss'),
    ];
    const fakeData = [
      faker.number.int({ min: 0, max: 10000 }),
      faker.number.int({ min: 0, max: 10000 }),
      faker.number.int({ min: 0, max: 10000 }),
    ];

    fakeData.forEach((data) => {
      chart.config.data.datasets[0].data.push(data);
      chart.config.data.datasets[0].data.shift();
    });

    currentTime.forEach((label) => {
      if (chart.config.data.labels) {
        chart.config.data.labels.push(label);
        chart.config.data.labels.shift();
      }
    });

    chart.update();
  }, [autoUpdate, chartRef2]);

  useEffect(() => {
    const interval = setInterval(() => {
      enqueueWidthAutoDequeue();
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [enqueueWidthAutoDequeue]);

  return (
    <div className="content">
      <Line
        ref={chartRef2}
        id="15sec"
        height={70}
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: '15sec/3Data',
              data: [...data],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart15Sec;
