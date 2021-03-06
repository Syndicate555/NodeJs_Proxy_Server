const express = require("express");

const emojis = require("./emojis");
const apiRequest = require("./api-request");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/api-request", apiRequest);

module.exports = router;
