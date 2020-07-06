const express = require("express");

const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?`;

router.get("/", (req, res) => {
  const params = new URLSearchParams({
    api_key: "API_KEY",
    domains: "wsj.com",
  });
  res.json({
    message: "Hello from the api",
  });
});

module.exports = router;
