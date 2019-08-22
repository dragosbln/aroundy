import moment from "moment";

const getDatesInterval = (from, to) => {
  let currentDate = moment(from);
  const stopDate = moment(to);
  const dates = [];
  while (currentDate <= stopDate) {
    const date = moment(currentDate).format("YYYY-MM-DD");
    dates.push(date);
    currentDate = moment(currentDate).add(1, "days");
  }
  return dates;
};

const makeDatesInterval = (dates = []) => {
  const intervals = [];
  let i = 0;
  while (i < dates.length) {
    const currentInterval = {};
    currentInterval.from = dates[i];
    while (
      i < dates.length - 1 &&
      moment(dates[i])
        .add(1, "days")
        .valueOf() === moment(dates[i + 1]).valueOf()
    ) {
      i++;
    }
    currentInterval.to = dates[i];
    intervals.push(currentInterval)
    i++;
  }
  return intervals
};

export default {
  getDatesInterval,
  makeDatesInterval
};
