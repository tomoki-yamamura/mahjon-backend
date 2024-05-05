import "reflect-metadata"
import createServer from "./utils/server";

const PORT = process.env.PORT || 8080;

const app = createServer()

app.listen(PORT, () => {
  console.log("Listening to: ", PORT);
})
