import { GoogleSpreadsheet } from "google-spreadsheet";
import { ISheetRepository } from "../interfaces/ISheetRepository";
import { gsDoc } from "../google-sheet-config";
import { injectable } from "inversify";
import { Sheet } from "../entities/sheet";
import { Row } from "../entities/row";

@injectable()
export class SheetRepository implements ISheetRepository {
  private doc: GoogleSpreadsheet;

  constructor() {
    this.doc = gsDoc();
  }

  async querySheetByDateRange({
    id,
    startDate,
    endDate,
  }: {
    id: string;
    startDate: string;
    endDate: string;
  }): Promise<Sheet> {
    await this.doc.loadInfo();
    const sheet = this.doc.sheetsByIndex[Number(id)];
    const rows = await sheet.getRows();
    // if you have domain logic, you should use it first.
    const rowEntity = rows
      .filter((row) => {
        const obj = row.toObject();
        console.log(startDate, endDate);
        
        return obj.Date >= startDate && obj.Date <= endDate;
      })
      .map((row) => {
        const obj = row.toObject();
        return new Row(obj)
      });
      return new Sheet(id, rowEntity)
  }
}
