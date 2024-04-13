import "reflect-metadata"
import express, { Application } from "express";
import cors from "cors";
import router from "./routes/rowRoutes";

const PORT = process.env.PORT || 8080;

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(PORT, () => {
  console.log("Listening to: ", PORT);
})
