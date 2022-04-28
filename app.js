
import express, { json } from "express";
import ExplorerController from "./lib/controller/explorer_controler.js";



// TODO : fix tests with the new services methods

const app = express();

app.use(json());

app.use("/explorers", ExplorerController);

const PORT = 3000;

app.get("/", (_, res) => {

  res.send({ "message": "hello" });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});




