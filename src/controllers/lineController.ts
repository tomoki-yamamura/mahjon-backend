import express, { NextFunction } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { ILineInteractor } from "../interface/ILineInteractor";
import { LineWebhookRequest, constructLineInput } from "../interactors/dto/input/lineController";

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
      const input = constructLineInput(req.body)
      const data = await this.interactor.getScoresByDateAndMode(input);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
