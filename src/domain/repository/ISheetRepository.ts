import { Sheet } from "../entities/sheet";

type params = {
  id: string;
  startDate: string;
  endDate: string;
}

export interface ISheetRepository {
  querySheetByDateRange(input: params): Promise<Sheet>;
}
