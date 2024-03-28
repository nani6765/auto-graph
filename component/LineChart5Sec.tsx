import { useCallback, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

import { options } from './const';

type Props = {
  autoUpdate: boolean;
};

function LineChart5Sec({ autoUpdate }: Props) {
  const currentTime = dayjs();
  const [maxLength, setMaxLength] = useState(30);
  const [labels, setLabels] = useState(
    Array.from(new Array(maxLength), (_, index) => {
      const diffTime = (maxLength - 1 - index) * 5;
      const diff = currentTime.subtract(diffTime, 's');
      return diff.format('mm:ss');
    })
  );
  const [fakeData, setFakeData] = useState(
    labels.map(() => faker.number.int({ min: 0, max: 1000 }))
  );

  const data = {
    labels,
    datasets: [
      {
        label: '5sec/1Data',
        data: fakeData,
        borderColor: 'rgb(132, 99, 255)',
        backgroundColor: 'rgba(132, 99, 255, 0.5)',
      },
    ],
  };

  const enqueueWidthAutoDequeue = useCallback(() => {
    const currentTime = [dayjs().format('mm:ss')];
    const fakeData = [faker.number.int({ min: 0, max: 1000 })];

    if (autoUpdate) {
      setLabels((prev) => {
        const prevList = prev.length === maxLength ? prev.slice(1) : prev;
        return [...prevList, ...currentTime];
      });
      setFakeData((prev) => {
        const prevList = prev.length === maxLength ? prev.slice(1) : prev;
        return [...prevList, ...fakeData];
      });
    }
  }, [autoUpdate]);

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
      <Line height={100} options={options} data={data} />
    </div>
  );
}

export default LineChart5Sec;
