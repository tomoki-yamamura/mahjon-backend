import express, { Application } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import sheetsRouter from "./routes/sheetRoutes";
import healthRouter from "./routes/healthRoutes";
import lineRouter from "./routes/lineRoutes";
import playerRouter from "./routes/playerRoute";
import swaggerDocs from "./../swaggerConfig";

function createServer() {
  const app: Application = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  // 例として、簡単なルートを追加
  /**
   * @swagger
   * /:
   *   get:
   *     summary: Welcome to Swagger-jsdoc!
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // register router
  app.use(sheetsRouter);
  app.use(healthRouter);
  app.use(lineRouter);
  app.use(playerRouter);

  return app;
}

export default createServer;
