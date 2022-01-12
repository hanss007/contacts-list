import mockData from './data/mockData.json';

function delay() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

export default async function apiAllData() {
  await delay();

  return mockData;
}
