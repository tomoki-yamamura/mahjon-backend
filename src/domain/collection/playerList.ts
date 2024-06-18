import PlayedDate from '../value/date'
import Player from '../entities/player'
import PlayMode from '../value/mode'
import PlayedDateRange from '../value/dateRange'

class PlayerList {
  private players: Player[]

  constructor(players: Player[]) {
    this.players = players
  }

  getPlayers(): Player[] {
    return [...this.players]
  }

  getPlayedDates(): PlayedDate[] {
    const dates: PlayedDate[] = this.players.reduce(
      (acc: PlayedDate[], player: Player) => {
        const playerDates = player.scores.getScores().map(score => score.date)
        playerDates.map(playedDate => {
          if (!acc.some(dateObj => dateObj.isEqualTo(playedDate))) {
            acc.push(playedDate)
          }
        })
        return acc
      },
      [],
    )

    return dates.sort((a, b) => a.getDate().getTime() - b.getDate().getTime())
  }

  hasScore(): PlayerList {
    return new PlayerList(this.players.filter((player) => player.scores.getScores().length !== 0))
  }

  filterScoresByMode(mode: PlayMode): PlayerList {
    const filterdPlayers = this.players.map((player) => player.filterScoresByMode(mode))
    return new PlayerList(filterdPlayers)
  }

  filterScoresByDate(dateRange: PlayedDateRange): PlayerList {
    const filterdPlayers = this.players.map((player) => player.filterScoresByDate(dateRange))
    return new PlayerList(filterdPlayers)
  }
}

export default PlayerList
