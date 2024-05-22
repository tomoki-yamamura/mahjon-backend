import express from "express";
import TYPES from "../config/inversity.types";
import container from "../config/inversity.config";
import { LineController } from "../controllers/lineController";

const router = express.Router();

const controller = container.get<LineController>(TYPES.LineController);

router.post("/callback", controller.getPlayerScoresByDate.bind(controller));

export default router;
