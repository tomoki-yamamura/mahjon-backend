import HanchanList from "../entities/hanchanList";
import Player from "../entities/player";

export interface IPlayerRepository {
  getAllPlayers(): Promise<Player[]>;
}
