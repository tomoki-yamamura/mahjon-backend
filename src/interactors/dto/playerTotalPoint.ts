import Score from "../../domain/entities/score";

export class PlayerTotalPointDTO {
  readonly name: string;
  readonly point: number;
  constructor (score: Score) {
    this.name = score.player.name;
    this.point = score.point.getPoint();
  }
}
