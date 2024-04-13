import exporess from "express";
import { RowController } from "../controllers/rowController";
import { RowRepository } from "../repositories/rowRepository";
import { RowInteractor } from "../interactors/rowInteractor";
import { Container } from "inversify";

// const repository = new RowRepository();
// const interactor = new RowInteractor(repository)
// const controller = new RowController(interactor)

const container = new Container();

const router = exporess.Router();

router.get("/rows/:id", controller.onQueryRowByDateRange.bind(controller))

export default router