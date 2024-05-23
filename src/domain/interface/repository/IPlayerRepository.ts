import Player from "../../entities/player";
import PlayedDate from "../../value/date";
import PlayMode from "../../value/mode";

export interface IPlayerRepository {
  getAllPlayers(): Promise<Player[]>;
  getPlayersByModeAndDate(mode: PlayMode, startDate: PlayedDate, endDate: PlayedDate): Promise<Player[]>;
}
