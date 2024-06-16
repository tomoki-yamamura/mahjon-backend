import { getScoreInteractorInput } from "../interactors/input/scoreInteractor";

export interface IScoreInteractor {
  getScoresByModeAndDate(input: getScoreInteractorInput): Promise<any>
}
