import { inject, injectable } from 'inversify'
import TYPES from '../../config/inversity.types'
import { IPlayerRepository } from '../../domain/interface/repository/IPlayerRepository'
import { Model } from 'mongoose'
import Player from '../../domain/entities/player'
import { reconstructPlayers } from './factory/player'
import { IScore } from './db/model/score'
import PlayedDate from '../../domain/value/date'
import PlayerList from '../../domain/collection/playerList'

@injectable()
export class PlayerRepository implements IPlayerRepository {
  private scoreModel: Model<IScore>
  constructor(@inject(TYPES.ScoreModel) scoreModel: Model<IScore>) {
    this.scoreModel = scoreModel
  }
  async getAllPlayers(): Promise<PlayerList> {
    const scores = await this.scoreModel
      .find()
      .populate('playerId', 'name')
      .exec()
    const players = reconstructPlayers(scores)
    return players
  }
}
