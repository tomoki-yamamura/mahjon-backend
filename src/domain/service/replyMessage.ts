import Player from "../entities/player";

class ReplyMessage {
  private players: Player[]
  constructor(players: Player[]) {
    this.players = players
  }

  formatMessage(): string {
    let message = this.players
      .map((player) => `${player.name}さん: ${player.totalScores().getPoint()}`)
      .reduce((acc, cur) => acc + cur + "\n", "");

    if (!message.trim()) {
      message = "成績がありません。";
    }

    return message;
  }
}

export default ReplyMessage