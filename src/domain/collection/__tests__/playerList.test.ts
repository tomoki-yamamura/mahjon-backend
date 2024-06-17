import Score from "../../value/score";
import ScoreList from "../scoreList";
import { point1, point2 } from "../../value/__tests__/fixture/point";
import { fixDate, oneSecLaterDate, oneSecBeforeDate } from "../../value/__tests__/fixture/date";
import { mode3players, mode4players } from "../../value/__tests__/fixture/mode";
import PlayedDateRange from "../../value/dateRange";


describe('PlayerList', () => {
  const score = new Score(fixDate, point1, mode3players)
  const scoreList = new ScoreList([score])
  test('should return unique getPlayedDates', () => {
    const addedScore = new Score(fixDate, point2, mode3players)
    const newScoreList = scoreList.add(addedScore);
    expect(newScoreList.getScores().length).toBe(2);
    expect(newScoreList.getScores()).toContain(addedScore);
  });
});