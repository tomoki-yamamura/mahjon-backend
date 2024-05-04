import exporess from "express";
import TYPES from "../config/inversity.types";
import container from "../config/inversity.config";
import { HealthController } from "../controllers/healthController";

const router = exporess.Router();

const controller = container.get<HealthController>(TYPES.HealthController);

router.get("/health", controller.getHealth.bind(controller));

export default router;
