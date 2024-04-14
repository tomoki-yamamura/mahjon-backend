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

  async queryRowByDateRange({
    id,
    start_date,
    end_date,
  }: {
    id: string;
    start_date: string;
    end_date: string;
  }) {
    console.log(id, start_date, end_date);
    
    const result = this.repository.queryRowByDateRange({id, start_date, end_date});
    return result
  }
}
