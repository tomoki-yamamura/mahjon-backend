import Player from "../entities/player";

export interface IPlayerRepository {
  getAllPlayers(): Promise<Player[]>;
}
