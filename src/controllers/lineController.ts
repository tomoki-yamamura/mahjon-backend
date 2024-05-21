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
  async getHanchansByDate(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const data = await this.interactor.getHanchansByDate();
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
