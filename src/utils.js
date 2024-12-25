import dayjs from 'dayjs';


const getRandomElementFromArray = (elements) => elements[Math.floor(Math.random() * elements.length)];
const getRandomNumberFromMinToMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const humanizeEventDate = (date, formatDate) => date ? dayjs(date).format(formatDate) : '';
const formatString = (string) => string.at(0).toUpperCase() + string.slice(1);


export {
  getRandomElementFromArray,
  getRandomNumberFromMinToMax,
  getRandomDate,
  humanizeEventDate,
  formatString
};
