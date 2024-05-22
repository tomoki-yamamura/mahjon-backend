import Player from "../../entities/player";

export interface IMessageSender {
  replyMessage(replyToken: string, players: Player[]): Promise<void>;
}
