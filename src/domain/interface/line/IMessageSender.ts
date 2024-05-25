import Player from "../../entities/player";

export interface IMessageSender {
  showLoadingAnimation(replyToken: string, second: number): Promise<void>;
  replyMessage(replyToken: string, players: Player[]): Promise<void>;
}
