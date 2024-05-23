import { inject, injectable } from "inversify";
import { ISheetInteractor } from "../interface/ISheetInteractor";
import { ISheetRepository } from "../domain/interface/repository/ISheetRepository";
import TYPES from "../config/inversity.types";
import { Sheet } from "./dto/sheet";
import SheetDate from "../domain/value/sheetDate";

@injectable()
export class SheetInteractor implements ISheetInteractor {
  private repository: ISheetRepository;
  constructor(@inject(TYPES.SheetRepository) repository: ISheetRepository) {
    this.repository = repository;
  }

  async querySheetByDateRange({
    id,
    startDate,
    endDate,
  }: {
    id: string;
    startDate: string;
    endDate: string;
  }) {
    const vstartDate = new SheetDate(startDate)
    const vendDate = new SheetDate(endDate)
    const params = {
      id: id,
      startDate: vstartDate,
      endDate: vendDate
    }
    const result = await this.repository.querySheetByDateRange(params);
    const sheet = new Sheet(result.id, result.rows)
    return sheet
  }
}
