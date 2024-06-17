import express, { NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import TYPES from '../config/inversity.types'
import { IPlayerInteractor } from '../interface/IPlayerInteractor'

@injectable()
export class PlayerController {
  private interactor: IPlayerInteractor
  constructor(@inject(TYPES.PlayerInteractor) interactor: IPlayerInteractor) {
    this.interactor = interactor
  }
  async getAllPlayers(
    req: express.Request,
    res: express.Response,
    next: NextFunction,
  ) {
    try {
      const data = await this.interactor.getAllPlayers()
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}
