class SheetDate {
  private date!: string

  constructor(date: string) {
    if (typeof date === 'string') {
      const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(date)
      if (!isValidDate) {
        throw new Error('Invalid date format. Expected YYYY-MM-DD.')
      }
      this.date = date
    }
  }

  getDate(): string {
    return this.date
  }
}

export default SheetDate
