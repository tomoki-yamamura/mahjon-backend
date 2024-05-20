import express from "express";
import TYPES from "../config/inversity.types";
import container from "../config/inversity.config";
import { PlayerController } from "../controllers/playerController";

const router = express.Router();

const controller = container.get<PlayerController>(TYPES.PlayerController);

router.get("/players", controller.getAllPlayers.bind(controller));

export default router;
