import PlayedDate from './date'

class PlayedDateRange {
  private startDate: PlayedDate
  private endDate: PlayedDate
  constructor(startDate: PlayedDate, endDate: PlayedDate) {
    this.startDate = startDate
    this.endDate = endDate
  }

  getDate(): [PlayedDate, PlayedDate] {
    return [this.startDate, this.endDate]
  }

  isEqualTo(otherDate: PlayedDate): boolean {
    return (
      this.startDate.getDate().toISOString() ===
        otherDate.getDate().toISOString() ||
      this.endDate.getDate().toISOString() === otherDate.getDate().toISOString()
    )
  }

  isAfter(otherDate: PlayedDate): boolean {
    return this.startDate.getDate() <= otherDate.getDate()
  }

  isBefore(otherDate: PlayedDate): boolean {
    return otherDate.getDate() <= this.endDate.getDate()
  }

  isWithinRange(otherDate: PlayedDate): boolean {
    const otherDateValue = otherDate.getDate()
    return (
      this.startDate.getDate() <= otherDateValue &&
      otherDateValue <= this.endDate.getDate()
    )
  }
}

export default PlayedDateRange
