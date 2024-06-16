import PlayerList from "../../collection/playerList";

export interface IMessageSender {
  showLoadingAnimation(replyToken: string, second: number): Promise<void>;
  replyMessage(replyToken: string, players: PlayerList): Promise<void>;
}
