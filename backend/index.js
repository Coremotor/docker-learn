const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello from backend dev!");
});

app.listen(8090, () => console.log(`Running...`));
