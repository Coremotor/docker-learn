const express = require("express");
// const cors = require("cors");
const router = require("./src/router");

const app = express();

// const whitelist = ["http://194.67.74.121", "http://localhost"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
//
// app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
  response.send("Hello from backend dev!");
});

app.listen(8090, () => console.log(`Running...`));
