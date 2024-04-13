import exporess from "express";
import { RowController } from "../controllers/rowController";
import { RowRepository } from "../repositories/rowRepository";
import { RowInteractor } from "../interactors/rowInteractor";
import { Container } from "inversify";
import { IRowRepository } from "../interfaces/IRowRepository";
import TYPES from "../registories/inversity.types";
import { IRowInteractor } from "../interfaces/IRowInteractor";

const container = new Container();

container.bind<IRowRepository>(TYPES.RowRepository).to(RowRepository);
container.bind<IRowInteractor>(TYPES.RowInteractor).to(RowInteractor);
container.bind(TYPES.RowController).to(RowController);

const router = exporess.Router();

const controller = container.get<RowController>(TYPES.RowController);

router.get("/rows/:id", controller.onQueryRowByDateRange.bind(controller));

export default router;
