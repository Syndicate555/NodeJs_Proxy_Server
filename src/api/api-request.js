const express = require("express");
const { default: Axios } = require("axios");

const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?`;
const cachedData;

router.get("/", async (req, res) => {
  try {
    const params = new URLSearchParams({
      apiKey: process.env.API_KEY,
      domains: "wsj.com",
    });

    // 1. make a request to the api
    const { data } = await Axios.get(`${BASE_URL}${params}`);

    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
