import { lineInteractorInput } from "../interactors/input/lineInteractor";

export interface ILineInteractor {
  sendScoreToPlayer(input: lineInteractorInput): Promise<void>
}
