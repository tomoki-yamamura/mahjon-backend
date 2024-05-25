import { inject, injectable } from "inversify";
import TYPES from "../../config/inversity.types";
import { IMessageSender } from "../../domain/interface/line/IMessageSender";
import Player from "../../domain/entities/player";
import { messagingApi } from "@line/bot-sdk";
import ReplyMessage from "../../domain/service/replyMessage";

@injectable()
export class LineMessageSender implements IMessageSender {
  private lineClient: messagingApi.MessagingApiClient;
  constructor(
    @inject(TYPES.LineClient) client: messagingApi.MessagingApiClient
  ) {
    this.lineClient = client;
  }
  async replyMessage(replyToken: string, players: Player[]): Promise<void> {
    const replyMessage = new ReplyMessage(players)
    const message = replyMessage.formatMessage()
    await this.lineClient.replyMessage({
      replyToken: replyToken,
      messages: [
        {
          type: "text",
          text: message,
        },
      ],
    });
  }
}
