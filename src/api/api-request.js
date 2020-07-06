const express = require("express");

const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?domains=wsj.com&apiKey=API_KEY`;

router.get("/", (req, res) => {
  res.json({
    message: "Hello from the api",
  });
});

module.exports = router;
