import { inject, injectable } from "inversify";
import { ISheetInteractor } from "../interfaces/ISheetInteractor";
import { ISheetRepository } from "../interfaces/ISheetRepository";
import TYPES from "../registories/inversity.types";

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
    const result = this.repository.querySheetByDateRange({id, startDate, endDate});
    return result
  }
}
