import PlayedDate from "../../value/date";
import Score from "../score";
import Point from "../../value/point";
import Player from "../player";
import Hanchan from "../hanchan";
import PlayMode from "../../value/mode";
import { testHanchan3player } from "./fixture/hanchan";
import { fixDate } from "../../value/__tests__/fixture/date";
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
