import { inject, injectable } from "inversify";
import TYPES from "../config/inversity.types";
import { ILineInteractor } from "../interface/ILineInteractor";
import { IPlayerRepository } from "../domain/interface/repository/IPlayerRepository";
import PlayMode from "../domain/value/mode";
import PlayedDate from "../domain/value/date";
import { IMessageSender } from "../domain/interface/line/IMessageSender";
import PlayerDTO from "./dto/player";
import {  reconstructPlayer } from "./dto/factory/playerTotalPoint";

@injectable()
export class LineInteractor implements ILineInteractor {
  private repository: IPlayerRepository;
  private messageSender: IMessageSender;
  constructor(
    @inject(TYPES.PlayerRepository) repository: IPlayerRepository,
    @inject(TYPES.LineMessageSender) messageSender: IMessageSender
  ) {
    this.repository = repository;
    this.messageSender = messageSender;
  }

  async replyMessage(replyToken: string, playersDTO: PlayerDTO[]): Promise<void> {
    const players = playersDTO.map((dto) => reconstructPlayer(dto))
    await this.messageSender.replyMessage(replyToken, players)
  }

  async getScoresByDateAndMode({
    mode,
    startDate,
    endDate,
  }: {
    mode: string;
    startDate: Date;
    endDate: Date;
  }): Promise<PlayerDTO[]> {
    const vmode = new PlayMode(mode)
    const vstartDate = new PlayedDate(startDate)
    const vendDate = new PlayedDate(endDate)
    const players = await this.repository.getPlayersByModeAndDate(vmode, vstartDate, vendDate);
    const playerDTOs = players.map((player) => new PlayerDTO(player)); 
    return playerDTOs
  }
}
