import express from "express";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("Listening to: ", PORT);
  
})
