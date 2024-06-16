import express, { NextFunction } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { ILineInteractor } from "../interface/ILineInteractor";
import { constructLineInput } from "../interactors/dto/factory/input/lineInteractor";
import { getScoresInputParams } from "./input/scoreController";
import { constructGetScoreInput } from "../interactors/dto/factory/input/scoreInteractor";
import { IScoreInteractor } from "../interface/IScoreInteractor";
import { getScoreInteractorInput } from "../interactors/input/scoreInteractor";

@injectable()
export class ScoreController {
  private interactor: IScoreInteractor;
  constructor(@inject(TYPES.LineInteractor) interactor: IScoreInteractor) {
    this.interactor = interactor;
  }

  async getScores(
    req: express.Request<getScoresInputParams>,
    res: express.Response,
    next: NextFunction
  ) {
    try {
      const interactorInput: getScoreInteractorInput = constructGetScoreInput(
        req.query as getScoresInputParams
      );
      // await this.interactor.(input);
      return res.status(201).json({});
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
