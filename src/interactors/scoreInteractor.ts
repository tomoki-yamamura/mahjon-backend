import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import {
  ILineInteractor,
  sendScoreToPlayerInput,
} from "../interface/ILineInteractor";
import { IPlayerRepository } from "../domain/interface/repository/IPlayerRepository";
import PlayMode from "../domain/value/mode";
import PlayedDate from "../domain/value/date";
import { IMessageSender } from "../domain/interface/line/IMessageSender";
import Player from "../domain/entities/player";
import { IScoreInteractor } from "../interface/IScoreInteractor";
import { getScoreInteractorInput } from "./input/score";
import { constructGetScoreInteractorOuput, getScoreInteractorOuput } from "./output/score";
import { score } from "../domain/value/__tests__/fixture";

@injectable()
export class ScoreInteractor implements IScoreInteractor {
  private repository: IPlayerRepository;
  constructor(@inject(TYPES.PlayerRepository) repository: IPlayerRepository) {
    this.repository = repository;
  }
  async getScoresByModeAndDate(
    input: getScoreInteractorInput
  ): Promise<getScoreInteractorOuput[]> {
    const vmode = new PlayMode(input.mode);
    const vstartDate = new PlayedDate(input.startDate);
    const vendDate = new PlayedDate(input.endDate);
    const players = await this.repository.getPlayersByModeAndDate(
      vmode,
      vstartDate,
      vendDate
    );
    const scores = constructGetScoreInteractorOuput(players)
    return scores
  }
}
