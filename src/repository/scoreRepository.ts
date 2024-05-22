// import { inject, injectable } from "inversify";
// import TYPES from "../config/inversity.types";
// import { IPlayerRepository } from "../domain/repository/IPlayerRepository";
// import { Model } from "mongoose";
// import Player from "../domain/entities/player";
// import { convertToPlayerArray } from "./factory/player";
// import { IScoreRepository, getScoresByDateParamsAndMode } from "../domain/repository/IScoreRepository";
// import { IScore } from "./db/model/score";
// import ScoreList from "../domain/collection/scoreList";

// @injectable()
// export class ScoreRepository implements IScoreRepository {
//   private model: Model<IScore>;
//   constructor(@inject(TYPES.ScoreModel) model: Model<IScore>) {
//     this.model = model;
//   }
//   getScoresByDateAndMode(input: getScoresByDateParamsAndMode): Promise<ScoreList> {
//     throw new Error("Method not implemented.");
//   }
// }
