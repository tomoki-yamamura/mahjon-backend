import { inject, injectable } from 'inversify'
import { ISheetInteractor } from '../interface/ISheetInteractor'
import { ISheetRepository } from '../domain/interface/repository/ISheetRepository'
import TYPES from '../config/inversity.types'
import SheetDate from '../domain/value/sheetDate'
import { Sheet } from './output/sheet'
import { getSheetInteractorInput } from './input/sheetInteractor'

@injectable()
export class SheetInteractor implements ISheetInteractor {
  private repository: ISheetRepository
  constructor(@inject(TYPES.SheetRepository) repository: ISheetRepository) {
    this.repository = repository
  }
  async querySheetByDateRange(input: getSheetInteractorInput): Promise<Sheet> {
    const vstartDate = new SheetDate(input.startDate)
    const vendDate = new SheetDate(input.endDate)
    const params = {
      id: input.id,
      startDate: vstartDate,
      endDate: vendDate,
    }
    const result = await this.repository.querySheetByDateRange(params)

    const sheet: Sheet = {
      id: result.id,
      rows: result.rows,
    }
    return sheet
  }
}
