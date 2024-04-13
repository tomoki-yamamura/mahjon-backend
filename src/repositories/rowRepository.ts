import { GoogleSpreadsheet } from "google-spreadsheet";
import { Row } from "../entities/row";
import { IRowRepository } from "../interfaces/IRowRepository";
import { gsDoc } from "../google-sheet-config";

export class RowRepository implements IRowRepository {
  private doc: GoogleSpreadsheet

  constructor() {
    this.doc = gsDoc();
  }
  
  async queryRowByDateRange(input: any): Promise<any> {
    await this.doc.loadInfo();
    const sheet = this.doc.sheetsByIndex[input];
    const rows = await sheet.getRows();
    return rows
  }
}