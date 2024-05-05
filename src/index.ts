import "reflect-metadata"
import express, { Application } from "express";
import cors from "cors";
import sheetsRouter from "./routes/sheetRoutes";
import healthRouter from "./routes/healthRoutes";

const PORT = process.env.PORT || 8080;

export const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sheetsRouter)
app.use(healthRouter)

app.listen(PORT, () => {
  console.log("Listening to: ", PORT);
})
