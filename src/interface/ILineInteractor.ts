import Player from "../domain/entities/player";
import PlayerDTO from "../interactors/dto/player";

export type params = {
  mode: string
  startDate: Date;
  endDate: Date;
};

export interface ILineInteractor {
  getScoresByDateAndMode(input: params): Promise<PlayerDTO[]>;
  replyMessage(replyToken: string, players: PlayerDTO[]): Promise<void>;
}
