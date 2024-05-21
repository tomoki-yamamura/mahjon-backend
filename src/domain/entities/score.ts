import PlayedDate from "../value/date";
import Point from "../value/point";
import Player from "./player";

class Score {
  readonly date: PlayedDate;
  readonly point: Point;
  constructor(date: PlayedDate, point: Point) {
    this.date = date
    this.point = point
  }
}

export default Score
