import { inject, injectable } from 'inversify'
import TYPES from '../config/inversity.types'
import { IPlayerInteractor } from '../interface/IPlayerInteractor'
import { IPlayerRepository } from '../domain/interface/repository/IPlayerRepository'
import { constructPlayerOutput } from './dto/factory/output/player'
import { PlayerOutput } from './output/player'

@injectable()
export class PlayerInteractor implements IPlayerInteractor {
  private repository: IPlayerRepository
  constructor(@inject(TYPES.PlayerRepository) repository: IPlayerRepository) {
    this.repository = repository
  }
  async getAllPlayers(): Promise<PlayerOutput[]> {
    const players = await this.repository.getAllPlayers()
    return constructPlayerOutput(players)
  }
}
