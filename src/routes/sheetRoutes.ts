import express from 'express'
import { SheetController } from '../controllers/sheetController'
import TYPES from '../config/inversity.types'
import container from '../config/inversity.config'

/**
 * @swagger
 * tags:
 *   name: Google Spread Sheet
 *   description: API endpoints for accessing Google Spread Sheet data
 */

/**
 * @swagger
 * /sheets/{id}:
 *   get:
 *     summary: Get data from Google Spread Sheet by date range
 *     tags: [Google Spread Sheet]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the Google Spread Sheet
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *         required: true
 *         description: The start date of the range (YYYY-MM-DD)
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *         required: true
 *         description: The end date of the range (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: A list of rows from the Google Spread Sheet within the specified date range
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the Google Spread Sheet
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Date:
 *                         type: string
 *                         description: The date of the row
 *                       Timestamp:
 *                         type: string
 *                         description: The timestamp of the row
 *                       Users:
 *                         type: object
 *                         description: The user data for the row
 *     security:
 *       - basicAuth: []
 */

const router = express.Router()

const controller = container.get<SheetController>(TYPES.SheetController)

router.get('/sheets/:id', controller.onQuerySheetByDateRange.bind(controller))

export default router
