import { getSheetInteractorInput } from '../interactors/input/sheetInteractor'
import { Sheet } from '../interactors/output/sheet'

export interface ISheetInteractor {
  querySheetByDateRange(input: getSheetInteractorInput): Promise<Sheet>
}
