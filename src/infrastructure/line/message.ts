import { inject, injectable } from "inversify";
import TYPES from "../../config/inversity.types";
import { IMessageSender } from "../../domain/interface/line/IMessageSender";
import Player from "../../domain/entities/player";
import { messagingApi } from "@line/bot-sdk";

@injectable()
export class LineMessageSender implements IMessageSender {
  private lineClient: messagingApi.MessagingApiClient;
  constructor(
    @inject(TYPES.LineClient) client: messagingApi.MessagingApiClient
  ) {
    this.lineClient = client;
  }
  async replyMessage(replyToken: string, players: Player[]): Promise<void> {
    const messages = players
      .map((player) => `${player.name}さん: ${player.totalScores().getPoint()}`)
      .reduce((acc, cur) => acc + cur + "\n", "");

    await this.lineClient.replyMessage({
      replyToken: replyToken,
      messages: [
        {
          type: "text",
          text: messages,
        },
      ],
    });
  }
}
