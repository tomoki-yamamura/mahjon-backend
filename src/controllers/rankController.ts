import express, { NextFunction } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { ILineInteractor } from "../interface/ILineInteractor";
import { IRankInteractor } from "../interface/IRankInteractor";
import { getRankInteractorInput } from "../interactors/input/rankInteractor";
import { constructGetRankInput } from "../interactors/dto/factory/input/rankInteractor";
import { getRankInputParams } from "./input/rankController";

@injectable()
export class RankController {
  private interactor: IRankInteractor;
  constructor(@inject(TYPES.RankInteractor) interactor: IRankInteractor) {
    this.interactor = interactor;
  }

  async getRanksByModeAndDate(
    req: express.Request<getRankInputParams>,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const interactorInput: getRankInteractorInput = constructGetRankInput(
        req.query as getRankInputParams
      );
      const data = await this.interactor.getRanksByModeAndDate(interactorInput);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
