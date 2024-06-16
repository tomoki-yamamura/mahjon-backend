import { PlayerOutput } from "../interactors/output/player";

export interface IPlayerInteractor {
  getAllPlayers(): Promise<PlayerOutput[]>;
}
