import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { IPlayerRepository } from "../domain/interface/repository/IPlayerRepository";
import { IRankInteractor } from "../interface/IRankInteractor";
import { getRankInteractorInput } from "./input/rankInteractor";
import RankService from "../domain/service/rankService";
import { RankOutput } from "./output/rank";
import PlayedDateRange from "../domain/value/dateRange";
import PlayedDate from "../domain/value/date";
import PlayMode from "../domain/value/mode";
import { constructRankOutput } from "./dto/factory/output/rank";

@injectable()
export class RankInteractor implements IRankInteractor {
  private repository: IPlayerRepository;
  constructor(@inject(TYPES.PlayerRepository) repository: IPlayerRepository) {
    this.repository = repository;
  }
  async getRanksByModeAndDate(input: getRankInteractorInput): Promise<RankOutput[]> {
    const startDate = new PlayedDate(input.startDate)
    const endDate = new PlayedDate(input.endDate)
    const vdateRange = new PlayedDateRange(startDate, endDate)
    const vmode = new PlayMode(input.mode)
    
    const players = await this.repository.getAllPlayers()
    const rankService = new RankService(players)
    const result = players.getPlayers().map((player) =>{ 
      const playerRankMap = rankService.getPlayerRank(player, vdateRange, vmode)
      return constructRankOutput(playerRankMap, player, vmode)
    })
    return result
  }
}
