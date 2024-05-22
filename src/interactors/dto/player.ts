import Player from "../../domain/entities/player";
import ScoreDTO from "./score";

export default class PlayerDTO {
  readonly Id: string;
  readonly name: string;
  readonly scores: ScoreDTO[];
  constructor(player: Player) {
    this.Id = player.Id;
    this.name = player.name;
    this.scores = player.scores
      .getScores()
      .map(
        (score) =>
          new ScoreDTO(
            score.date.getDate(),
            score.point.getPoint(),
            score.mode.getMode()
          )
      );
  }
}
