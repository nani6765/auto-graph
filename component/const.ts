export const options = {
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
