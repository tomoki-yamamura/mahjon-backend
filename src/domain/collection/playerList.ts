import PlayedDate from "../value/date";
import Player from "../entities/player";

class PlayerList {
  private players: Player[];

  constructor(players: Player[]) {
    this.players = players
  }

  getPlayers(): Player[] {
    return [...this.players]
  }

  getPlayedDates(): PlayedDate[] {
    const dates: PlayedDate[] = this.players.reduce((acc: PlayedDate[], player: Player) => {
      const playerDates = player.scores.getScores().map((score) => score.date);
      playerDates.map((playedDate) => {
        if (!acc.some(dateObj => dateObj.isEqualTo(playedDate))) {
          acc.push(playedDate);
        }
      })
      return acc;
    }, []);

    return dates.sort((a, b) => a.getDate().getTime() - b.getDate().getTime())
  }
}


export default PlayerList