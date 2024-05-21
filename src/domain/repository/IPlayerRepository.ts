import HanchanList from "../collection/hanchanList";
import Player from "../entities/player";

export interface IPlayerRepository {
  getAllPlayers(): Promise<Player[]>;
}
