import { getScoreInteractorInput } from "../interactors/input/scoreInteractor";
import { getScoreInteractorOuput } from "../interactors/output/score";

export interface IScoreInteractor {
  getScoresByModeAndDate(input: getScoreInteractorInput): Promise<getScoreInteractorOuput[]>
}
