import { GoogleSpreadsheet } from 'google-spreadsheet'
import { ISheetRepository } from '../../domain/interface/repository/ISheetRepository'
import { inject, injectable } from 'inversify'
import { Sheet } from '../../domain/entities/sheet'
import { Row } from '../../domain/entities/row'
import TYPES from '../../config/inversity.types'
import SheetDate from '../../domain/value/sheetDate'

@injectable()
export class SheetRepository implements ISheetRepository {
  private doc: GoogleSpreadsheet
  constructor(@inject(TYPES.gsDoc) gsDoc: GoogleSpreadsheet) {
    this.doc = gsDoc
  }
  async querySheetByDateRange({
    id,
    startDate,
    endDate,
  }: {
    id: string
    startDate: SheetDate
    endDate: SheetDate
  }): Promise<Sheet> {
    await this.doc.loadInfo()
    const sheet = this.doc.sheetsByIndex[Number(id)]
    const rows = await sheet.getRows()
    const rowEntity = rows
      .filter(row => {
        const obj = row.toObject()
        return obj.Date >= startDate.getDate() && obj.Date <= endDate.getDate()
      })
      .map(row => {
        const obj = row.toObject()
        return new Row(obj)
      })
    return new Sheet(id, rowEntity)
  }
}
