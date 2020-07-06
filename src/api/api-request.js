const express = require("express");
const { default: Axios } = require("axios");
const rateLimit = require("express-rate-limit");
const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?`;
let cachedData;
let cachedTime;

// Define your API restrictions here
const limiter = rateLimit({
  windowsMs: 30 * 1000, // 15 minutes
  max: 2, // limit each IP to all requests per windowsMs
});
router.get("/", limiter, async (req, res) => {
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
});

module.exports = router;
