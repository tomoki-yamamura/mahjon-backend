import PlayedDate from "../../../value/date";
import PlayMode from "../../../value/mode";
import Point from "../../../value/point";
import Hanchan from "../../hanchan";
import Player from "../../player";
import Score from "../../score";

const date = new PlayedDate(new Date());
const player = new Player("1", "tester");
const mode3 = new PlayMode("3player");
const mode4= new PlayMode("4player");
const point = new Point(0);
const scores = [new Score("1", player, point)];

const testHanchan3player = new Hanchan("1", date, mode3, scores)
const testHanchan4player = new Hanchan("2", date, mode4, scores)

export {
  testHanchan3player,
  testHanchan4player
}