import { PlayerTotalPointDTO } from "../interactors/dto/playerTotalPoint";

type params = {
  mode: string
  startDate: Date;
  endDate: Date;
};

export interface ILineInteractor {
  getScoresByDateAndMode(input: params): Promise<PlayerTotalPointDTO[]>;
}
