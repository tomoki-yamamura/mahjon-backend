import moment from 'moment-timezone';

function getStartOfToday(): Date {
  const startOfToday = moment().startOf('day').tz('Asia/Tokyo');
  return startOfToday.toDate();
}

function getEndOfToday(): Date {
  const endOfToday = moment().endOf('day').tz('Asia/Tokyo');
  return endOfToday.toDate();
}

function getWeekly(): Date {
  const monday = moment().startOf('isoWeek').tz('Asia/Tokyo'); // ISO 8601: Monday is the first day of the week
  return monday.toDate();
}

function getMonthly(): Date {
  const firstDayOfMonth = moment().startOf('month').tz('Asia/Tokyo');
  return firstDayOfMonth.toDate();
}

const dateMap = new Map<string, Date>();

dateMap.set("Today", getStartOfToday());
dateMap.set("Weekly", getWeekly());
dateMap.set("Monthly", getMonthly());

export {
  getStartOfToday,
  getEndOfToday,
  getWeekly,
  getMonthly,
  dateMap
}