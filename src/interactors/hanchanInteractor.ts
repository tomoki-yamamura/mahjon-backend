import { inject, injectable } from "inversify";
import { ISheetInteractor } from "../interface/ISheetInteractor";
import { ISheetRepository } from "../domain/repository/ISheetRepository";
import TYPES from "../config/inversity.types";
import { Sheet } from "./dto/sheet";

@injectable()
export class HanchanInteractor implements ISheetInteractor {
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
    const result = await this.repository.querySheetByDateRange({id, startDate, endDate});
    const sheet = new Sheet(result.id, result.rows)
    return sheet
  }
}