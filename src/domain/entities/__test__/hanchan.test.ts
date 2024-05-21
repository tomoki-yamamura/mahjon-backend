import Score from "../score";
import Point from "../../value/point";
import Player from "../player";
import { testHanchan3player } from "./fixture/hanchan";
describe('Hanchan', () => {

  const testData = testHanchan3player;
  const player = new Player("2", "tester")
  const point = new Point(0)
  const newScore = new Score("2", player, point)

  test('addScore should add a score to the scores array', () => {
    testData.addScore(newScore);
    expect(testData.Scores).toContain(newScore);
  });
});
