import HanchanList from "../domain/collection/hanchanList";
import { PlayerTotalPointDTO } from "../interactors/dto/playerTotalPoint";

type params = {
  mode: string
  startDate: Date;
  endDate: Date;
};

export interface ILineInteractor {
  getHanchansByDate(input: params): Promise<PlayerTotalPointDTO[]>;
}
