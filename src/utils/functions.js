import moment from "moment";
import {
  StackActions,
  NavigationAction,
  NavigationActions
} from "react-navigation";

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
    intervals.push(currentInterval);
    i++;
  }
  return intervals;
};

const formatInterval = (interval = {}, noYear = false) => {
  
  const from = moment(interval.from);
  const to = moment(interval.to);
  if (from.valueOf() === to.valueOf()) {
    return `${from.date()} ${from.format("MMM")}${noYear ? `` : ` ${from.year()}`}`;
  }
  if (from.month() === to.month() && from.year() === to.year()) {
    return `${from.date()} - ${to.date()} ${from.format(
      "MMM"
    )}${noYear ? `` : ` ${from.year()}`}`;
  }
  if (from.year() === to.year()) {
    return `${from.date()} ${from.format("MMM")} - ${to.date()} ${to.format(
      "MMM"
    )}${noYear ? `` : ` ${from.year()}`}`;
  }
  //having the same interval between 2 years is impossible, New Year's Eve will separate them
  return ``;
};

const resetNavigation = (navigation, routeName) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  });
  navigation.dispatch(resetAction);
};

const calculateDaysTotal = (intervals = []) => {
  return intervals.reduce(
    (acc, currentVal) =>
      acc +
      (currentVal.halfDay
        ? 0.5
        : moment
            .duration(moment(currentVal.to).diff(moment(currentVal.from)))
            .asDays() + 1),
    0
  );
};

updateApiState = (initialState = {}, key='', value=null) => ({
  ...initialState.apiState,
  [key]: value
})

export default {
  getDatesInterval,
  makeDatesInterval,
  formatInterval,
  resetNavigation,
  calculateDaysTotal,
  updateApiState
};
