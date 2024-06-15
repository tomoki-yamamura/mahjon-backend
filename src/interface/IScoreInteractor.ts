import { getScoreInteractorInput } from "../interactors/input/score";
import { getScoreInteractorOuput } from "../interactors/output/score";

export interface IScoreInteractor {
  getScoresByModeAndDate(input: getScoreInteractorInput): Promise<getScoreInteractorOuput[]>
}
