import exporess from "express";
import { SheetController } from "../controllers/sheetController";
import { SheetRepository } from "../repositories/sheetRepository";
import { SheetInteractor } from "../interactors/sheetInteractor";
import { Container } from "inversify";
import { ISheetRepository } from "../interfaces/ISheetRepository";
import TYPES from "../registories/inversity.types";
import { ISheetInteractor } from "../interfaces/ISheetInteractor";

const container = new Container();

container.bind<ISheetRepository>(TYPES.SheetRepository).to(SheetRepository);
container.bind<ISheetInteractor>(TYPES.SheetInteractor).to(SheetInteractor);
container.bind(TYPES.SheetController).to(SheetController);

const router = exporess.Router();

const controller = container.get<SheetController>(TYPES.SheetController);

router.get("/sheets/:id", controller.onQuerySheetByDateRange.bind(controller));

export default router;
