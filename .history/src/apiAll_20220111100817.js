import mockData from './data/mockData.json';

function delay() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

export default async function apiData(cursor) {
  await delay();
  if (Math.random() > 0.7) {
    throw new Error('Something went wrong');
  }

  return mockData;
}
