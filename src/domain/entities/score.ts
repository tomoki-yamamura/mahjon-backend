import PlayedDate from "../value/date";
import PlayMode from "../value/mode";
import Point from "../value/point";
import Player from "./player";

class Score {
  readonly date: PlayedDate;
  readonly point: Point;
  readonly mode: PlayMode
  constructor(date: PlayedDate, point: Point, mode: PlayMode) {
    this.date = date
    this.point = point
    this.mode = mode
  }
}

export default Score
