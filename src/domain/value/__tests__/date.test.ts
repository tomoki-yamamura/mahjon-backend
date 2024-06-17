import PlayedDate from '../date'

describe('PlayedDate', () => {
  const testDate = new Date()

  let dateInstance: PlayedDate
  beforeEach(() => {
    dateInstance = new PlayedDate(testDate)
  })

  test('getDate should return the correct date', () => {
    expect(dateInstance.getDate()).toEqual(testDate)
  })

  test('isEqualTo should return false for a different date', () => {
    const differentDateInstance = new PlayedDate(new Date())
    expect(dateInstance.isEqualTo(differentDateInstance)).toBe(false)
  })

  test('isAfter should return true for a different date', () => {
    const differentDateInstance = new PlayedDate(new Date())
    expect(differentDateInstance.isAfter(dateInstance)).toBe(true)
  })
  test('isBefore should return true for a different date', () => {
    const differentDateInstance = new PlayedDate(new Date())
    expect(dateInstance.isBefore(differentDateInstance)).toBe(true)
  })
})
