import PlayedDate from "../../value/date";
import Score from "../score";
import Point from "../../value/point";
import Player from "../player";
import Hanchan from "../hanchan";
import PlayMode from "../../value/mode";

describe('Hanchan', () => {

  const date = new PlayedDate(new Date());
  const player = new Player("1", "tester")
  const point = new Point(0)
  const mode = new PlayMode("3player")
  const scores = [new Score("1", player, point)]

  const testData = new Hanchan("1", date, mode, scores);

  test('addScore should add a score to the scores array', () => {
    const newScore = new Score("2", player, point);
    testData.addScore(newScore);

    expect(testData.Scores).toContain(newScore);
  });
});