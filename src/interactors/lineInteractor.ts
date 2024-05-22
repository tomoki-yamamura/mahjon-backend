import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { PlayerTotalPointDTO } from "./dto/playerTotalPoint";
import { ILineInteractor } from "../interface/ILineInteractor";
import { IScoreRepository } from "../domain/repository/IScoreRepository";
import { IPlayerRepository } from "../domain/repository/IPlayerRepository";

@injectable()
export class LineInteractor implements ILineInteractor {
  private repository: IPlayerRepository;
  constructor(@inject(TYPES.PlayerRepository) repository: IPlayerRepository) {
    this.repository = repository;
  }
  async getScoresByDate(input: { mode: string; startDate: Date; endDate: Date; }): Promise<PlayerTotalPointDTO[]> {
    const players = await this.repository.getAllPlayers()
    return players.map((player) => new PlayerTotalPointDTO(player))
  }
}
