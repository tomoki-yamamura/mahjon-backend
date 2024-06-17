import { inject, injectable } from 'inversify'
import TYPES from '../config/inversity.types'
import { ILineInteractor } from '../interface/ILineInteractor'
import { IPlayerRepository } from '../domain/interface/repository/IPlayerRepository'
import PlayMode from '../domain/value/mode'
import PlayedDate from '../domain/value/date'
import { IMessageSender } from '../domain/interface/line/IMessageSender'
import { lineInteractorInput } from './input/lineInteractor'
import PlayedDateRange from '../domain/value/dateRange'
import PlayerList from '../domain/collection/playerList'

@injectable()
export class LineInteractor implements ILineInteractor {
  private repository: IPlayerRepository
  private messageSender: IMessageSender
  constructor(
    @inject(TYPES.PlayerRepository) repository: IPlayerRepository,
    @inject(TYPES.LineMessageSender) messageSender: IMessageSender,
  ) {
    this.repository = repository
    this.messageSender = messageSender
  }
  async sendScoreToPlayer({
    replyToken,
    userId,
    mode,
    startDate,
    endDate,
  }: lineInteractorInput): Promise<void> {
    await this.messageSender.showLoadingAnimation(userId, 5)
    const vmode = new PlayMode(mode)
    const vstartDate = new PlayedDate(startDate)
    const vendDate = new PlayedDate(endDate)
    const vdateRange = new PlayedDateRange(vstartDate, vendDate)
    const players = await this.repository.getAllPlayers()

    const filteredPlayersScore = players
      .getPlayers()
      .map(player =>
        player.filterScoresByDate(vdateRange).filterScoresByMode(vmode),
      )

    await this.messageSender.replyMessage(
      replyToken,
      new PlayerList(filteredPlayersScore),
    )
  }
}
