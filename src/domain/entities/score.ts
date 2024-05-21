import Point from "../value/point";
import Player from "./player";

class Score {
  readonly Id: string;
  readonly player: Player;
  readonly point: Point;
  constructor(id: string, player: Player, point: Point) {
    this.Id = id;
    this.player = player
    this.point = point
  }
}

export default Score
