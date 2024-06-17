import PlayerList from "../collection/playerList";
import Player from "../entities/player";
import PlayedDate from "../value/date";
import PlayedDateRange from "../value/dateRange";
import PlayMode from "../value/mode";
import Point from "../value/point";

export type Rank = {
  date: PlayedDate;
  position: number;
};

export type playerRankMap = Map<Player, Rank[]>;

class RankService {
  private players: PlayerList;
  constructor(players: PlayerList) {
    this.players = players;
  }

  getPlayerRank(
    player: Player,
    dateRange: PlayedDateRange,
    mode: PlayMode
  ): playerRankMap {
    const filteredPlayers = this.players.getPlayers().map((player) =>
      player.filterScoresByDate(dateRange).filterScoresByMode(mode)
    )
    const playerList = new PlayerList(filteredPlayers)
    const playedDates = playerList.getPlayedDates()    
    const ranks = playedDates.map((date) => {
      const playersSameDate = filteredPlayers.filter((player) => player.scores.hasScoreDate(date));
      const calculateRank = this.calculateRank(playersSameDate, date)
      const index = calculateRank.findIndex(([p, _]) => p.Id === player.Id);
      const position = index + 1
      const rank: Rank = {
        date,
        position
      }
      return rank
    })
    const playerRankMap: playerRankMap = new Map();
    
    playerRankMap.set(player, ranks)
    return playerRankMap
  }

  private calculateRank(players: Player[], date: PlayedDate): [Player, Point][] {
    const calucMap: Map<Player, Point> = new Map()
    players.map((player) => calucMap.set(player, player.getScoreByDate(date).point))
    const result =  this.sortCalcMaps(calucMap)
    return result
  }

  private sortCalcMaps(calucMap: Map<Player, Point>) {
    const result = [...calucMap.entries()].sort((a, b) => b[1].getPoint() - a[1].getPoint());
    return result
  }
}

export default RankService;
