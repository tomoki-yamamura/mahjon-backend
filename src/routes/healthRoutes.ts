import exporess from 'express'
import TYPES from '../config/inversity.types'
import container from '../config/inversity.config'
import { HealthController } from '../controllers/healthController'

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     responses:
 *       200:
 *         description: Returns a health check message.
 */

const router = exporess.Router()

const controller = container.get<HealthController>(TYPES.HealthController)

router.get('/health', controller.getHealth.bind(controller))

export default router
