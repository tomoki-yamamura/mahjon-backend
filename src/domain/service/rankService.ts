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
type datePlayerMap = Map<PlayedDate, Player[]>

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
    )
    const playerList = new PlayerList(filteredPlayers)
    const playedDates = playerList.getPlayedDates()
    const ranks = playedDates.map((date) => {
      const playersWith = filteredPlayers.filter((player) =>
        player.scores.some((score) => score.date.isEqualTo(date))
      );
      const calculateRank = this.calculateRank(playersWith, date)
      const position = calculateRank.findIndex(e => e[0] === player)
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
    const result = [...calucMap.entries()].sort((a, b) => a[1].getPoint() - b[1].getPoint());
    return result
  }
}

export default RankService;
