import { inject, injectable } from "inversify";
import TYPES from "../../config/inversity.types";
import { IMessageSender } from "../../domain/interface/line/IMessageSender";
import Player from "../../domain/entities/player";
import { messagingApi } from "@line/bot-sdk";
import ReplyMessage from "../../domain/service/replyMessage";
import { ShowLoadingAnimationRequest } from "@line/bot-sdk/dist/messaging-api/model/models";
import PlayerList from "../../domain/collection/playerList";

@injectable()
export class LineMessageSender implements IMessageSender {
  private lineClient: messagingApi.MessagingApiClient;
  constructor(
    @inject(TYPES.LineClient) client: messagingApi.MessagingApiClient
  ) {
    this.lineClient = client;
  }
  async showLoadingAnimation(replyToken: string, second: number): Promise<void> {
    const input: ShowLoadingAnimationRequest = {
      chatId: replyToken,
      loadingSeconds: second
    }
   await  this.lineClient.showLoadingAnimation(input)
  }
  async replyMessage(replyToken: string, players: PlayerList): Promise<void> {
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
