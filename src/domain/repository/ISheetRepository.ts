import { Sheet } from "../entities/sheet";

export interface ISheetRepository {
  querySheetByDateRange(input: any): Promise<Sheet>;
}
