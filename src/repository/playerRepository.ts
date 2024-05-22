import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { IPlayerRepository } from "../domain/repository/IPlayerRepository";
import { Model } from "mongoose";
import Player from "../domain/entities/player";
import { reconstructPlayers } from "./factory/player";
import { IPlayer } from "./db/model/player";
import { IScore } from "./db/model/score";
// import { convertToPlayerArray } from "./factory/player";

@injectable()
export class PlayerRepository implements IPlayerRepository {
  private playerModel: Model<IPlayer>;
  private scoreModel: Model<IScore>;
  constructor(
    @inject(TYPES.PlayerModel) playerModel: Model<IPlayer>,
    @inject(TYPES.ScoreModel) scoreModel: Model<IScore>
  ) {
    this.playerModel = playerModel;
    this.scoreModel = scoreModel;
  }
  async getAllPlayers(): Promise<Player[]> {
    const scores = await this.scoreModel.find({mode: "3players"}).populate('playerId', 'name').exec();
    const players = reconstructPlayers(scores)
    return players
  }
}
