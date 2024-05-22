import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { PlayerTotalPointDTO } from "./dto/output/playerTotalPoint";
import { ILineInteractor } from "../interface/ILineInteractor";
import { IScoreRepository } from "../domain/repository/IScoreRepository";
import { IPlayerRepository } from "../domain/repository/IPlayerRepository";
import PlayMode from "../domain/value/mode";
import PlayedDate from "../domain/value/date";

@injectable()
export class LineInteractor implements ILineInteractor {
  private repository: IPlayerRepository;
  constructor(@inject(TYPES.PlayerRepository) repository: IPlayerRepository) {
    this.repository = repository;
  }
  async getScoresByDateAndMode({ mode, startDate, endDate }: {
    mode: string,
    startDate: Date,
    endDate: Date,
  }): Promise<PlayerTotalPointDTO[]> {
    const modeValue = new PlayMode(mode)
    const startDateValue = new PlayedDate(startDate)
    const endDateValue = new PlayedDate(endDate)
    const players = await this.repository.getAllPlayers()
    const filteredPlayersScore = players.map((player) => {
      return player.filterScoresByDate(startDateValue, endDateValue)
    })
    const filteredPlayersByMode = filteredPlayersScore.map((player) => {
      return player.filterScoresByMode(modeValue)
    })
    return filteredPlayersByMode.map((player) => new PlayerTotalPointDTO(player))
  }
}
