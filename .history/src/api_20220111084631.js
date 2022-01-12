import mockData from './data/mockData.json';

const size = 10;

function delay() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

export default async function apiData(cursor) {
  await delay();
  if (Math.random() > 0.7) {
    throw new Error('Something went wrong');
  }
  cursor += 1;

  const start = cursor * size;
  const end = cursor * size + size;
  mockData.slice(start, end);

  return mockData
