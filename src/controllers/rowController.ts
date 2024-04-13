import express, { NextFunction } from 'express'
import { IRowInteractor } from '../interfaces/IRowInteractor'
import { gsDoc } from '../google-sheet-config'
import { inject, injectable } from 'inversify'
import TYPES from '../registories/inversity.types'

@injectable()
export class RowController {
  private interactor: IRowInteractor
  constructor(@inject(TYPES.RowInteractor) interactor: IRowInteractor) {
    this.interactor = interactor
  }
  async onQueryRowByDateRange(req: express.Request, res: express.Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { start_date, end_date } = req.query;
      const data = await this.interactor.queryRowByDateRange({id, start_date, end_date})
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}
