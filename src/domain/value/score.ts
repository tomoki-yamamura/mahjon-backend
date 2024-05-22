import PlayedDate from "./date";
import PlayMode from "./mode";
import Point from "./point";
import Player from "../entities/player";

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
