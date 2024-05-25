import express from "express";
import TYPES from "../config/inversity.types";
import container from "../config/inversity.config";
import { LineController } from "../controllers/lineController";

/**
 * @swagger
 * tags:
 *   name: LINE Webhook
 *   description: LINE Webhook endpoint
 */

/**
 * @swagger
 * /callback:
 *   post:
 *     summary: Handle LINE Webhook events
 *     tags: [LINE Webhook]
 *     requestBody:
 *       description: JSON object containing the LINE webhook event
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Server error
 */

const router = express.Router();

const controller = container.get<LineController>(TYPES.LineController);

router.post("/callback", controller.sendScoreToPlayer.bind(controller));

export default router;
