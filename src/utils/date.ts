import moment from 'moment-timezone'

function getStartOfToday(): Date {
  const startOfToday = moment().startOf('day').tz('Asia/Tokyo')
  return startOfToday.toDate()
}

function getEndOfToday(): Date {
  const endOfToday = moment().endOf('day').tz('Asia/Tokyo')
  return endOfToday.toDate()
}

function getWeekly(): Date {
  const monday = moment().startOf('isoWeek').tz('Asia/Tokyo')
  return monday.toDate()
}

function getMonthly(): Date {
  const firstDayOfMonth = moment().startOf('month').tz('Asia/Tokyo')
  return firstDayOfMonth.toDate()
}

const dateMap = new Map<string, Date>()

dateMap.set('Today', getStartOfToday())
dateMap.set('Weekly', getWeekly())
dateMap.set('Monthly', getMonthly())

function parseStringToDate(dateString: string): Date {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string')
  }
  return date
}

export {
  getStartOfToday,
  getEndOfToday,
  getWeekly,
  getMonthly,
  parseStringToDate,
  dateMap,
}
