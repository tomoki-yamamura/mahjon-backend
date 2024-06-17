import SheetDate from '../sheetDate'

describe('SheetDate', () => {
  test('should create a SheetDate instance from a valid string date', () => {
    const dateStr = '2024-01-01'
    const sheetDate = new SheetDate(dateStr)
    expect(sheetDate.getDate()).toBe(dateStr)
  })

  test('should throw an error for an invalid string date format', () => {
    expect(() => new SheetDate('01-01-2024')).toThrow(
      'Invalid date format. Expected YYYY-MM-DD.',
    )
  })
})
