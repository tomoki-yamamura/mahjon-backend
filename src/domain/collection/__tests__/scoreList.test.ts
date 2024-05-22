import Score from "../../value/score";
import ScoreList from "../scoreList";
import { point1, point2 } from "../../value/__tests__/fixture/point";
import { fixDate, oneSecLaterDate, oneBeforeDate } from "../../value/__tests__/fixture/date";
import { mode3players } from "../../value/__tests__/fixture/mode";


describe('ScoreList', () => {
  const score = new Score(fixDate, point1, mode3players)
  const scoreList = new ScoreList([score])
  test('should add a score and return a new ScoreList', () => {
    const addedScore = new Score(fixDate, point2, mode3players)
    const newScoreList = scoreList.add(addedScore);
    expect(newScoreList.getScores().length).toBe(2);
    expect(newScoreList.getScores()).toContain(addedScore);
  });

  test('should return all scores', () => {
    const scores = scoreList.getScores();
    expect(scores.length).toBe(1);
    expect(scores).toContain(score);
  });

  test('should filter scores by date range', () => {
    const oldScore = new Score(oneBeforeDate, point1, mode3players)
    const newScoreList = scoreList.add(oldScore);
    const filteredScores = newScoreList.filterScores(fixDate, fixDate)
    expect(filteredScores.getScores().length).toBe(1);
    expect(filteredScores.getScores()).toContain(score)
    expect(filteredScores).not.toContain(oldScore);
  });

  test('should filter scores by date range', () => {
    const newScore = new Score(oneSecLaterDate, point1, mode3players)
    const newScoreList = scoreList.add(newScore);
    const filteredScores = newScoreList.filterScores(oneSecLaterDate, oneSecLaterDate)
    expect(filteredScores.getScores().length).toBe(1);
    expect(filteredScores.getScores()).toContain(newScore)
    expect(filteredScores).not.toContain(score);
  });

  test('should return total score points', () => {
    const newScore = new Score(fixDate, point2, mode3players)
    const newScoreList = scoreList.add(newScore);
    const totalPoint = newScoreList.totalScorePoint();
    expect(totalPoint.getPoint()).toBe(point1.add(point2).getPoint());
  });
});
