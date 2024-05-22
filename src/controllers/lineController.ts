import express, { NextFunction } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { ILineInteractor } from "../interface/ILineInteractor";
import { LineWebhookRequest, constructLineInput } from "../interactors/dto/input/lineController";
// import env from "dotenv";
// import * as line from "@line/bot-sdk";
// const MessagingApiClient = line.messagingApi.MessagingApiClient
// env.config()

// const client = new MessagingApiClient({
//   channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN as string,
// })


@injectable()
export class LineController {
  private interactor: ILineInteractor;
  constructor(@inject(TYPES.LineInteractor) interactor: ILineInteractor) {
    this.interactor = interactor;
  }
  async getPlayerScoresByDate(
    req: express.Request<{}, {}, LineWebhookRequest>,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      if (req.body.events[0].type === "postback") return res.status(201)
      const [replyToken, input] = constructLineInput(req.body)
      const players = await this.interactor.getScoresByDateAndMode(input);
      await this.interactor.replyMessage(replyToken, players)
      return res.status(201).json(players);
    } catch (error) {
      next(error);
    }
  }
}
