import { useCallback, useEffect, useRef, useState } from 'react';
import { Chart as ChartJS } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

import { options } from './const';

type Props = {
  autoUpdate: boolean;
  data: number[];
};

function LineChart5Sec({ autoUpdate, data }: Props) {
  const chartRef = useRef<ChartJS<'line'>>(null);
  const currentTime = dayjs();
  const [maxLength, setMaxLength] = useState(30);

  const labels = Array.from(new Array(maxLength), (_, index) => {
    const diffTime = (maxLength - 1 - index) * 5;
    const diff = currentTime.subtract(diffTime, 's');
    return diff.format('mm:ss');
  });

  const enqueueWidthAutoDequeue = useCallback(() => {
    if (!chartRef.current || !autoUpdate) {
      return;
    }
    const chart = chartRef.current;
    const label = dayjs().format('mm:ss');
    const data = faker.number.int({ min: 0, max: 10000 });

    chart.config.data.datasets[0].data.push(data);
    chart.config.data.datasets[0].data.shift();

    if (chart.config.data.labels) {
      chart.config.data.labels.push(label);
      chart.config.data.labels.shift();
    }

    chart.update();
  }, [autoUpdate, chartRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      enqueueWidthAutoDequeue();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [enqueueWidthAutoDequeue]);

  return (
    <div className="content">
      <Line
        id="5sec"
        ref={chartRef}
        height={70}
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: '5sec/1Data',
              data: [...data],
              borderColor: 'rgb(132, 99, 255)',
              backgroundColor: 'rgba(132, 99, 255, 0.5)',
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart5Sec;
