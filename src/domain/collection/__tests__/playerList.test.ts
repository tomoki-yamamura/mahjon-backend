import Score from "../../value/score";
import ScoreList from "../scoreList";
import { point1, point2 } from "../../value/__tests__/fixture/point";
import { fixDate, oneSecLaterDate, oneSecBeforeDate } from "../../value/__tests__/fixture/date";
import { mode3players, mode4players } from "../../value/__tests__/fixture/mode";
import PlayedDateRange from "../../value/dateRange";
import Player from "../../entities/player";
import PlayerList from "../playerList";


describe('PlayerList', () => {
  const score1 = new Score(fixDate, point1, mode3players)
  const score2 = new Score(oneSecLaterDate, point2, mode3players)
  const scoreList1 = new ScoreList([score1, score2])
  const score3 = new Score(fixDate, point2, mode3players)
  const score4 = new Score(oneSecLaterDate, point1, mode3players)
  const scoreList2 = new ScoreList([score3, score4])
  const score5 = new Score(oneSecBeforeDate, point2, mode3players)
  const score6 = new Score(fixDate, point1, mode3players)
  const scoreList3 = new ScoreList([score5, score6])

  const playerA = new Player("1", "playerA", scoreList1)
  const playerB = new Player("2", "playerB", scoreList2)
  const playerC = new Player("3", "playerC", scoreList3)

  const playerList = new PlayerList([playerA, playerB, playerC])
  
  test('should return unique getPlayedDates', () => {
    const expected = [oneSecBeforeDate, fixDate, oneSecLaterDate]
    expect(playerList.getPlayedDates()).toEqual(expected);
  });
});