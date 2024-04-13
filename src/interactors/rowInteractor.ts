import { inject, injectable } from "inversify";
import { IRowInteractor } from "../interfaces/IRowInteractor";
import { IRowRepository } from "../interfaces/IRowRepository";
import TYPES from "../registories/inversity.types";

@injectable()
export class RowInteractor implements IRowInteractor {
  private repository: IRowRepository;
  constructor(@inject(TYPES.RowRepository) repository: IRowRepository) {
    this.repository = repository;
  }

  async queryRowByDateRange(input: any) {
    return this.repository.queryRowByDateRange(input);
  }
}
