import { sendScoreToPlayerInput } from "../interactors/input/lineInteractor";

export interface ILineInteractor {
  sendScoreToPlayer(input: sendScoreToPlayerInput): Promise<void>
}
