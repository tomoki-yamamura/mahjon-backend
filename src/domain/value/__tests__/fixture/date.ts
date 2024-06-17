import PlayedDate from '../../date'

const fixedDateOneSecBefore = new Date('2021-12-31T23:59:59Z')
const fixedDate = new Date('2022-01-01T00:00:00Z')
const fixedDateOneSecLater = new Date('2022-01-01T00:00:01Z')

const oneSecBeforeDate = new PlayedDate(fixedDateOneSecBefore)
const fixDate = new PlayedDate(fixedDate)
const oneSecLaterDate = new PlayedDate(fixedDateOneSecLater)

export { oneSecBeforeDate, fixDate, oneSecLaterDate }
