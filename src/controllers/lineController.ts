import express, { NextFunction } from "express";
import { ISheetInteractor } from "../interface/ISheetInteractor";
import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { IPlayerInteractor } from "../interface/IPlayerInteractor";
import { ILineInteractor } from "../interface/ILineInteractor";

@injectable()
export class LineController {
  private interactor: ILineInteractor;
  constructor(@inject(TYPES.LineInteractor) interactor: ILineInteractor) {
    this.interactor = interactor;
  }
  async getPlayerScoresByDate(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const mode = "3players"
      let startDate  = new Date()
      const endDate = new Date('2024/04/01')
      const input = {
        mode,
        startDate,
        endDate
      }
      const data = await this.interactor.getScoresByDate(input);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
