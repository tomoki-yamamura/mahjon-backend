import express from "express";
import { SheetController } from "../controllers/sheetController";
import TYPES from "../config/inversity.types";
import container from "../config/inversity.config";

const router = express.Router();

const controller = container.get<SheetController>(TYPES.SheetController);

router.get("/sheets/:id", controller.onQuerySheetByDateRange.bind(controller));

export default router;
