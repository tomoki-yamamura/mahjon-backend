import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { IPlayerRepository } from "../domain/repository/IPlayerRepository";
import { Model } from "mongoose";
import Player from "../domain/entities/player";
import { convertToPlayerArray } from "./factory/player";

@injectable()
export class PlayerRepository implements IPlayerRepository {
  private model: Model<Player>;
  constructor(@inject(TYPES.PlayerModel) model: Model<Player>) {
    this.model = model;
  }
  async getAllPlayers(): Promise<Player[]> {
    const playerModels = await this.model.find({})
    const players = convertToPlayerArray(playerModels)
    return players
  }
}
