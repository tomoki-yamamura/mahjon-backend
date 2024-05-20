import express, { Application } from "express";
import cors from "cors";
import sheetsRouter from "../routes/sheetRoutes"
import healthRouter from "../routes/healthRoutes"
import lineRouter from "../routes/lineRoutes"
import playerRouter from "../routes/playerRoutes"


function createServer() {
  const app: Application = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(sheetsRouter)
  app.use(healthRouter)
  app.use(playerRouter)
  app.use(lineRouter)

  return app
}

export default createServer;