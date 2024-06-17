import PlayMode from '../../value/mode'
import Point from '../../value/point'
import Player from '../player'
import { fixDate, oneSecLaterDate } from '../../value/__tests__/fixture/date'
import ScoreList from '../../collection/scoreList'
import PlayedDateRange from '../../value/dateRange'

describe('Player', () => {
  let mockScoreList: jest.Mocked<ScoreList>
  let player: Player

  beforeEach(() => {
    mockScoreList = {
      totalScorePoint: jest.fn(),
      filterScoresByDate: jest.fn(),
      filterScoresByMode: jest.fn(),
    } as unknown as jest.Mocked<ScoreList>

    player = new Player('1', 'tester', mockScoreList)
  })

  test('totalScores should return total score points', () => {
    const expectedPoint = new Point(100)
    mockScoreList.totalScorePoint.mockReturnValue(expectedPoint)

    const totalPoint = player.totalScores()

    expect(totalPoint).toBe(expectedPoint)
    expect(mockScoreList.totalScorePoint).toHaveBeenCalled()
  })

  test('filterScoresByDate should return a new Player instance with filtered scores', () => {
    const startDate = fixDate
    const endDate = oneSecLaterDate
    const dateRange = new PlayedDateRange(startDate, endDate)
    const filteredScoreList = new ScoreList([])
    mockScoreList.filterScoresByDate.mockReturnValue(filteredScoreList)

    const filteredPlayer = player.filterScoresByDate(dateRange)

    expect(filteredPlayer).not.toBe(player)
    expect(filteredPlayer.scores).toBe(filteredScoreList)
    expect(mockScoreList.filterScoresByDate).toHaveBeenCalledWith(dateRange)
  })

  test('filterScoresByMode should return a new Player instance with filtered scores', () => {
    const mode = new PlayMode('3players')
    const filteredScoreList = new ScoreList([])
    mockScoreList.filterScoresByMode.mockReturnValue(filteredScoreList)

    const filteredPlayer = player.filterScoresByMode(mode)

    expect(filteredPlayer).not.toBe(player)
    expect(filteredPlayer.scores).toBe(filteredScoreList)
    expect(mockScoreList.filterScoresByMode).toHaveBeenCalledWith(mode)
  })
})
