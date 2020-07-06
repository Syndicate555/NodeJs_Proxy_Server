const express = require("express");

const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?`;

router.get("/", (req, res) => {
  try {
    const params = new URLSearchParams({
      api_key: process.env.API_KEY,
      domains: "wsj.com",
    });
    res.json({
      message: "Hello from the api",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
