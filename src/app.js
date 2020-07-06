const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const data = require("./data.json");
require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();
app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.get("/data", (req, res) => {
  res.send(data);
});
app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
