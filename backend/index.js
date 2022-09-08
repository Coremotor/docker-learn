const express = require("express");
const cors = require("cors");
const router = require("./src/router");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
  response.send("Hello from backend!");
});

app.listen(8090, () => console.log(`Running...`));
