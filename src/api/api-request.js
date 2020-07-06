const express = require("express");

const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?domains=wsj.com&apiKey=2e209d65084a4475920191f033f023ce`;

router.get("/", (req, res) => {
  console.log("connected");
  res.json({
    message: "Hello from the api",
  });
});

module.exports = router;
