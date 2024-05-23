import "reflect-metadata";
import TYPES from "./inversity.types";
import { Container } from "inversify";
import { ISheetInteractor } from "../interface/ISheetInteractor";
import { ISheetRepository } from "../domain/interface/repository/ISheetRepository";
import { SheetController } from "../controllers/sheetController";
import { SheetInteractor } from "../interactors/sheetInteractor";
import { SheetRepository } from "../infrastructure/repository/sheetRepository";
import { HealthController } from "../controllers/healthController";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { Model } from "mongoose";
import { IPlayerRepository } from "../domain/interface/repository/IPlayerRepository";
import { IPlayer, PlayerModel } from "../infrastructure/repository/db/model/player";
import { IPlayerInteractor } from "../interface/IPlayerInteractor";
import { PlayerInteractor } from "../interactors/playerInteractor";
import { LineInteractor } from "../interactors/lineInteractor";
import { ILineInteractor } from "../interface/ILineInteractor";
import { IScore, ScoreModel } from "../infrastructure/repository/db/model/score";
import { PlayerRepository } from "../infrastructure/repository/playerRepository";
import { LineController } from "../controllers/lineController";
import { messagingApi } from '@line/bot-sdk';
import { LineMessageSender } from "../infrastructure/line/message";
import { IMessageSender } from "../domain/interface/line/IMessageSender";
import googleSpreadSheetDoc from "./google/spreadsheet";
import lineClient from "./line/messageClient";

const container = new Container();

container.bind<ISheetRepository>(TYPES.SheetRepository).to(SheetRepository);
container.bind<IPlayerRepository>(TYPES.PlayerRepository).to(PlayerRepository);
container.bind<ISheetInteractor>(TYPES.SheetInteractor).to(SheetInteractor);
container.bind<IPlayerInteractor>(TYPES.PlayerInteractor).to(PlayerInteractor);
container.bind<ILineInteractor>(TYPES.LineInteractor).to(LineInteractor);
container.bind<IMessageSender>(TYPES.LineMessageSender).to(LineMessageSender);
container.bind(TYPES.SheetController).to(SheetController);
container.bind<GoogleSpreadsheet>(TYPES.gsDoc).toConstantValue(googleSpreadSheetDoc)
container.bind(TYPES.HealthController).to(HealthController);
container.bind(TYPES.LineController).to(LineController);

container.bind<messagingApi.MessagingApiClient>(TYPES.LineClient).toConstantValue(lineClient)

container.bind<Model<IPlayer>>(TYPES.PlayerModel).toConstantValue(PlayerModel)
container.bind<Model<IScore>>(TYPES.ScoreModel).toConstantValue(ScoreModel)
export default container;
