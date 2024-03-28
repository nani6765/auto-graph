import { useCallback, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

import { options } from './const';

type Props = {
  autoUpdate: boolean;
};

function LineChart15Sec({ autoUpdate }: Props) {
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
        label: '15sec/3Data',
        data: fakeData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const enqueueWidthAutoDequeue = useCallback(() => {
    const currentTime = [
      dayjs().subtract(10, 's').format('mm:ss'),
      dayjs().subtract(5, 's').format('mm:ss'),
      dayjs().format('mm:ss'),
    ];
    const fakeData = [
      faker.number.int({ min: 0, max: 1000 }),
      faker.number.int({ min: 0, max: 1000 }),
      faker.number.int({ min: 0, max: 1000 }),
    ];

    const currentTimeList = currentTime.slice(-maxLength);
    const fakeDataList = fakeData.slice(-maxLength);

    if (autoUpdate) {
      setLabels((prev) => {
        const prevList =
          prev.length + currentTime.length > maxLength
            ? prev.slice(prev.length - (maxLength - currentTime.length))
            : prev;
        return [...prevList, ...currentTimeList];
      });
      setFakeData((prev) => {
        const prevList =
          prev.length + fakeDataList.length > maxLength
            ? prev.slice(prev.length - (maxLength - fakeDataList.length))
            : prev;
        return [...prevList, ...fakeDataList];
      });
    }
  }, [autoUpdate]);

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
      <Line height={70} options={options} data={data} />
    </div>
  );
}

export default LineChart15Sec;
