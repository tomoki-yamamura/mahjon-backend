import PlayerDTO from "../interactors/dto/player";

export interface IPlayerInteractor {
  getAllPlayers(): Promise<PlayerDTO[]>;
}
