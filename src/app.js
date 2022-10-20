require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// TODO [GET] => http://localhost:3000/videos
app.use("/api/v1", routes.router);

app.listen(PORT, () =>
  console.log(`La API esta lista por http://localhost:${PORT}`)
);
