import { PlayerTotalPointDTO } from "../interactors/dto/output/playerTotalPoint";

export type params = {
  mode: string
  startDate: Date;
  endDate: Date;
};

export interface ILineInteractor {
  getScoresByDateAndMode(input: params): Promise<PlayerTotalPointDTO[]>;
}
