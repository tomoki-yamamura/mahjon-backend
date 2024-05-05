import { Sheet } from "../interactors/dto/sheet";

type params = {
  id: string;
  startDate: string;
  endDate: string;
};

export interface ISheetInteractor {
  querySheetByDateRange(input: params): Promise<Sheet>;
}
