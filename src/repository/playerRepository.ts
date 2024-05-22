import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { IPlayerRepository } from "../domain/repository/IPlayerRepository";
import { Model } from "mongoose";
import Player from "../domain/entities/player";
import { reconstructPlayers } from "./factory/player";
import { IScore } from "./db/model/score";

@injectable()
export class PlayerRepository implements IPlayerRepository {
  private scoreModel: Model<IScore>;
  constructor(
    @inject(TYPES.ScoreModel) scoreModel: Model<IScore>
  ) {
    this.scoreModel = scoreModel;
  }
  async getAllPlayers(): Promise<Player[]> {
    const scores = await this.scoreModel.find({mode: "3players"}).populate('playerId', 'name').exec();
    const players = reconstructPlayers(scores)
    return players
  }
}
