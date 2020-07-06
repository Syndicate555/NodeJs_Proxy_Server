const express = require("express");
const { default: Axios } = require("axios");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");
const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?`;
let cachedData;
let cachedTime;

// My custom API key
const apiKeys = new Map();
apiKeys.set("12345", true);

// Define your API restrictions here
const limiter = rateLimit({
  windowsMs: 30 * 1000, // 15 minutes
  max: 10, // limit each IP to all requests per windowsMs
});

const speedLimiter = slowDown({
  windowMs: 30 * 1000,
  delayAfter: 1,
  delayMs: 500,
});

router.get(
  "/",
  limiter,
  speedLimiter,
  (req, res, next) => {},
  async (req, res) => {
    // in memory cache
    if (cachedTime && cachedTime > Date.now() - 30 * 1000) {
      return res.json(cachedData);
    }
    try {
      const params = new URLSearchParams({
        apiKey: process.env.API_KEY,
        domains: "wsj.com",
      });

      // 1. make a request to the api
      const { data } = await Axios.get(`${BASE_URL}${params}`);

      // 2. respond to ths request with data from api

      cachedTime = Date.now();

      cachedData = data;
      data.cacheTime = cachedTime;
      return res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
