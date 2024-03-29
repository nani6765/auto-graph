import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
import Image from 'next/image';
// import 'chartjs-adapter-luxon';
// import ChartStreaming from 'chartjs-plugin-streaming';

import { MainWrapper } from '@/styles/home';
import { Switch } from 'loplat-ui';
import LineChart5Sec from '@/component/LineChart5Sec';
import LineChart15Sec from '@/component/LineChart15Sec';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [autoUpdate, setAutoUpdate] = useState(true);
  const data = Array.from(new Array(30), () =>
    faker.number.int({ min: 0, max: 10000 })
  );

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: `${process.env.callback}`,
      },
    });

  return (
    <MainWrapper>
      <div className="header">
        <div>
          <Switch
            variant="outlined"
            checked={autoUpdate}
            onChange={() => setAutoUpdate((prev) => !prev)}
          />
        </div>
        {isAuthenticated ? (
          <div>
            {user && user.picture && (
              <Image
                className="profile"
                width={40}
                height={40}
                src={user.picture}
                alt={user.email ?? ''}
              />
            )}
            <button onClick={() => logoutWithRedirect()}>logout</button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>login</button>
        )}
      </div>
      <LineChart5Sec autoUpdate={autoUpdate} data={data} />
      <LineChart15Sec autoUpdate={autoUpdate} data={data} />
    </MainWrapper>
  );
}
