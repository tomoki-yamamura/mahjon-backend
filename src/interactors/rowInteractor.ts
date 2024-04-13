import { IRowInteractor } from "../interfaces/IRowInteractor";
import { IRowRepository } from "../interfaces/IRowRepository";

export class RowInteractor implements IRowInteractor {
  private repository: IRowRepository
  constructor(repository: IRowRepository) {
    this.repository = repository
  }
  
  async queryRowByDateRange(input: any) {
    return this.repository.queryRowByDateRange(input)
  }
}
