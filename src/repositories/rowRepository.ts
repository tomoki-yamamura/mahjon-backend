import { GoogleSpreadsheet } from "google-spreadsheet";
import { IRowRepository } from "../interfaces/IRowRepository";
import { gsDoc } from "../google-sheet-config";
import { injectable } from "inversify";
import { Row } from "../entities/row";

@injectable()
export class RowRepository implements IRowRepository {
  private doc: GoogleSpreadsheet;

  constructor() {
    this.doc = gsDoc();
  }

  async queryRowByDateRange({
    id,
    start_date,
    end_date,
  }: {
    id: string;
    start_date: string;
    end_date: string;
  }): Promise<Row[]> {
    await this.doc.loadInfo();
    console.log(id, start_date, end_date);
    
    const sheet = this.doc.sheetsByIndex[Number(id)];
    const rows = await sheet.getRows();
    // if you have domain logic, you should use it first.
    rows.map((row) => {
      const obj = row.toObject();
      return obj.Date >= start_date && obj.Date <= end_date;
    });
    return rows.map((row) => {
      const obj = row.toObject();
      return new Row(obj.ID, obj.Date, obj.Timestamp, obj.HASSYHHH);
    });
  }
}
