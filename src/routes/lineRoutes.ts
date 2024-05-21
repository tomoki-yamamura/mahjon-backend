import express from "express";
import { SheetController } from "../controllers/sheetController";
import TYPES from "../config/inversity.types";
import container from "../config/inversity.config";

const router = express.Router();

const controller = container.get<HanchanController>(TYPES.HanchanController);

router.get("/callback", controller.getHanchansByDate.bind(controller));

export default router;
