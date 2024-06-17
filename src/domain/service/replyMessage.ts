import PlayerList from "../collection/playerList";

class ReplyMessage {
  private players: PlayerList
  constructor(players: PlayerList) {
    this.players = players
  }

  formatMessage(): string {
    let message = this.players.getPlayers()
      .map((player) => `${player.name}さん: ${player.totalScores().getPoint()}`)
      .reduce((acc, cur) => acc + cur + "\n", "");

    if (!message.trim()) {
      message = "成績がありません。";
    }

    return message;
  }
}

export default ReplyMessage