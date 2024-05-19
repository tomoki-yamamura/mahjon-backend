import PlayedDate from "../../value/date";
import Score from "../score";
import Point from "../../value/point";
import Player from "../player";
import Hanchan from "../hanchan";
import PlayMode from "../../value/mode";
import { testHanchan3player } from "./fixture/hanchan";

describe('Hanchan', () => {

  const testData = testHanchan3player;

  const date = new PlayedDate(new Date());
  const player = new Player("2", "tester")
  const point = new Point(0)
  const mode = new PlayMode("3player")
  const newScore = new Score("2", player, point)

  test('addScore should add a score to the scores array', () => {
    testData.addScore(newScore);
    expect(testData.Scores).toContain(newScore);
  });
});
