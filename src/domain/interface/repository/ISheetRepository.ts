import { Sheet } from "../../entities/sheet";
import SheetDate from "../../value/sheetDate";

type params = {
  id: string;
  startDate: SheetDate;
  endDate: SheetDate;
}

export interface ISheetRepository {
  querySheetByDateRange(input: params): Promise<Sheet>;
}
