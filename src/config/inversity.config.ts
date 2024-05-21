import TYPES from "./inversity.types";
import "reflect-metadata";
import { Container } from "inversify";
import { ISheetInteractor } from "../interface/ISheetInteractor";
import { ISheetRepository } from "../domain/repository/ISheetRepository";
import { SheetController } from "../controllers/sheetController";
import { SheetInteractor } from "../interactors/sheetInteractor";
import { SheetRepository } from "../repository/sheetRepository";
import { HealthController } from "../controllers/healthController";
import { GoogleSpreadsheet } from "google-spreadsheet";
import {
  sheetID,
  serviceAccountAuth,
} from "../repository/googleSheet/google-sheet-config";
import { IHanchanRepository } from "../domain/repository/IHanchanRepository";
import { HanchanModel, IHanchan } from "../repository/db/model/hanchan";
import { Model } from "mongoose";
import { IPlayerRepository } from "../domain/repository/IPlayerRepository";
import { IPlayer, PlayerModel } from "../repository/db/model/player";
import { PlayerRepository } from "../repository/playerRepository";
import { IPlayerInteractor } from "../interface/IPlayerInteractor";
import { PlayerInteractor } from "../interactors/playerInteractor";
import { PlayerController } from "../controllers/playerController";
import { HanchanRepository } from "../repository/hanchanRepository";
import { LineInteractor } from "../interactors/lineInteractor";
import { ILineInteractor } from "../interface/ILineInteractor";
import { LineController } from "../controllers/lineController";

const container = new Container();

container.bind<ISheetRepository>(TYPES.SheetRepository).to(SheetRepository);
container.bind<IPlayerRepository>(TYPES.PlayerRepository).to(PlayerRepository);
container.bind<IHanchanRepository>(TYPES.HanchanRepository).to(HanchanRepository);
container.bind<ISheetInteractor>(TYPES.SheetInteractor).to(SheetInteractor);
container.bind<IPlayerInteractor>(TYPES.PlayerInteractor).to(PlayerInteractor);
container.bind<ILineInteractor>(TYPES.LineInteractor).to(LineInteractor);
container.bind(TYPES.SheetController).to(SheetController);
container
  .bind<GoogleSpreadsheet>(TYPES.gsDoc)
  .toDynamicValue(() => {
    return new GoogleSpreadsheet(sheetID, serviceAccountAuth);
  })
  .inSingletonScope();

container.bind(TYPES.HealthController).to(HealthController);
container.bind(TYPES.PlayerController).to(PlayerController);
container.bind(TYPES.LineController).to(LineController);

container.bind<Model<IPlayer>>(TYPES.PlayerModel).toConstantValue(PlayerModel)
container.bind<Model<IHanchan>>(TYPES.HanchanModel).toConstantValue(HanchanModel)
export default container;

