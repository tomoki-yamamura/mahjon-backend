import PlayerList from "../collection/playerList";
import Player from "../entities/player";
import PlayedDateRange from "../value/dateRange";
import PlayMode from "../value/mode";

export type Rank = {
  date: Date;
  rank: number;
};

export type playerRankMap = Map<Player, Rank[]>;

class RankService {
  private players: Player[];
  constructor(players: Player[]) {
    this.players = players;
  }

  getPlayerRank(
    player: Player,
    dateRange: PlayedDateRange,
    mode: PlayMode
  ): playerRankMap {
    const filteredPlayers = this.players.map((player) =>
      player.filterScoresByDate(dateRange).filterScoresByMode(mode)
    );

    const playerList = new PlayerList(filteredPlayers)
    const playedDates = playerList.getPlayedDates()

    const playerRankMap: playerRankMap = new Map();

    
    return playerRankMap
  }

}

export default RankService;
