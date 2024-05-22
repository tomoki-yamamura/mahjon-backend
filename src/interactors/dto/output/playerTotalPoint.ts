import Player from "../../../domain/entities/player";
import Score from "../../../domain/value/score";

export class PlayerTotalPointDTO {
  readonly name: string;
  readonly totalPoint: number;
  constructor (player: Player) {
    this.name = player.name;
    this.totalPoint = player.totalScores().getPoint();
  }
}
