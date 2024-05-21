import PlayedDate from "../../../value/date";
import PlayMode from "../../../value/mode";
import Point from "../../../value/point";
import Hanchan from "../../hanchan";
import Player from "../../player";
import Score from "../../score";
import { fixDate } from "../../../value/__tests__/fixture/date"

const player = new Player("1", "tester");
const mode3 = new PlayMode("3player");
const mode4= new PlayMode("4player");
const point = new Point(0);
const scores = [new Score("1", player, point)];

const testHanchan3player = new Hanchan("1", fixDate, mode3, scores)
const testHanchan4player = new Hanchan("2", fixDate, mode4, scores)

export {
  testHanchan3player,
  testHanchan4player
}