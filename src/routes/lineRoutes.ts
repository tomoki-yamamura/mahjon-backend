import express from "express";
import { SheetController } from "../controllers/sheetController";
import TYPES from "../config/inversity.types";
import container from "../config/inversity.config";
import { LineController } from "../controllers/lineController";

const router = express.Router();

const controller = container.get<LineController>(TYPES.LineController);

router.get("/callback", controller.getHanchansByDate.bind(controller));

export default router;
