import "reflect-metadata"
import createServer from "./server";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI as string;

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    
    const app = createServer();
    app.listen(PORT, () => {
      console.log("Server listening on port:", PORT);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

startServer();
