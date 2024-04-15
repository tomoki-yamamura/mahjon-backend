import express, { NextFunction } from 'express'
import { ISheetInteractor } from '../interfaces/ISheetInteractor'
import { gsDoc } from '../google-sheet-config'
import { inject, injectable } from 'inversify'
import TYPES from '../registories/inversity.types'

@injectable()
export class SheetController {
  private interactor: ISheetInteractor
  constructor(@inject(TYPES.SheetInteractor) interactor: ISheetInteractor) {
    this.interactor = interactor
  }
  async onQuerySheetByDateRange(req: express.Request, res: express.Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { startDate, endDate } = req.query;
      const data = await this.interactor.querySheetByDateRange({id, startDate, endDate})
      return res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}
