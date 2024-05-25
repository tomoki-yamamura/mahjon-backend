import express, { NextFunction } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import {
  ILineInteractor,
  LineWebhookRequest,
  sendScoreToPlayerInput,
} from "../interface/ILineInteractor";
import { constructLineInput } from "../interactors/dto/factory/lineWebhook";

@injectable()
export class LineController {
  private interactor: ILineInteractor;
  constructor(@inject(TYPES.LineInteractor) interactor: ILineInteractor) {
    this.interactor = interactor;
  }
  async sendScoreToPlayer(
    req: express.Request<{}, {}, LineWebhookRequest>,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      if (req.body.events[0].type === "postback") return res.status(201);
      const input: sendScoreToPlayerInput  = constructLineInput(req.body);
      await this.interactor.sendScoreToPlayer(input);
      return res.status(201).json({});
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
