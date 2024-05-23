import express from "express";
import TYPES from "../config/inversity.types";
import container from "../config/inversity.config";
import { PlayerController } from "../controllers/playerController";

/**
 * @swagger
 * tags:
 *   name: Players
 *   description: Player management
 */

/**
 * @swagger
 * /players:
 *   get:
 *     summary: Retrieve a list of players
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: A list of players.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                     type: string
 *                     description: The unique identifier for the player.
 *                   name:
 *                     type: string
 *                     description: The name of the player.
 *                   scores:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         date:
 *                           type: string
 *                           format: date-time
 *                           description: The date and time when the score was recorded.
 *                         point:
 *                           type: number
 *                           description: The score points.
 *                         mode:
 *                           type: string
 *                           description: The mode of the game.
 *       500:
 *         description: Server error
 */

const router = express.Router();

const controller = container.get<PlayerController>(TYPES.PlayerController);

router.get("/players", controller.getAllPlayers.bind(controller));

export default router;
