import { getRankInteractorInput } from "../interactors/input/rankInteractor";

export interface IRankInteractor {
  getRanksByModeAndDate(input: getRankInteractorInput): Promise<any>;
}
