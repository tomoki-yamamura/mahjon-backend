import TYPES from "./inversity.types";
import { Container } from "inversify";
import { ISheetInteractor } from "../interface/ISheetInteractor";
import { ISheetRepository } from "../domain/repository/ISheetRepository";
import { SheetController } from "../controllers/sheetController";
import { SheetInteractor } from "../interactors/sheetInteractor";
import { SheetRepository } from "../repository/sheetRepository";
import { HealthController } from "../controllers/healthController";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { sheetID, serviceAccountAuth } from "../repository/googleSheet/google-sheet-config";

const container = new Container();

container.bind<ISheetRepository>(TYPES.SheetRepository).to(SheetRepository);
container.bind<ISheetInteractor>(TYPES.SheetInteractor).to(SheetInteractor);
container.bind(TYPES.SheetController).to(SheetController);
container.bind<GoogleSpreadsheet>(TYPES.gsDoc).toDynamicValue(() => {
  return new GoogleSpreadsheet(sheetID, serviceAccountAuth);
}).inSingletonScope(); 

container.bind(TYPES.HealthController).to(HealthController);
export default container;
