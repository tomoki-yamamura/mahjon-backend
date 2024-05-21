import Point from "../value/point";
import Player from "./player";

class Score {
  readonly player: Player;
  readonly point: Point;
  constructor(player: Player, point: Point) {
    this.player = player
    this.point = point
  }
}

export default Score
