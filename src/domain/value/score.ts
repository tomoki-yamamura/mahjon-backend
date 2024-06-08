import PlayedDate from "./date";
import PlayMode from "./mode";
import Point from "./point";

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
