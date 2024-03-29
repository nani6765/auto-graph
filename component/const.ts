import type { ChartOptions } from 'chart.js';

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
    tooltip: {
      intersect: false,
      enabled: true,
      mode: 'index',
    } as const,
  },
};
