import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { PlayerTotalPointDTO } from "./dto/playerTotalPoint";
import { IHanchanRepository } from "../domain/repository/IHanchanRepository";
import { ILineInteractor } from "../interface/ILineInteractor";
import PlayMode from "../domain/value/mode";
import { model } from "mongoose";
import PlayedDate from "../domain/value/date";

@injectable()
export class LineInteractor implements ILineInteractor {
  private repository: IHanchanRepository;
  constructor(@inject(TYPES.HanchanRepository) repository: IHanchanRepository) {
    this.repository = repository;
  }
  async getHanchansByDate({ mode, startDate, endDate}: {
    mode: string,
    startDate: Date,
    endDate: Date,
  }): Promise<PlayerTotalPointDTO[]> {
    const queryMode = new PlayMode(mode)
    const queryStartDate = new PlayedDate(startDate)
    const queryEndDate = new PlayedDate(endDate)
    const query = {
      mode: queryMode,
      startDate: queryStartDate,
      endDate: queryEndDate,
    }

    const HanchanList = await this.repository.getHanchansByDate(query)
    
  }
}
