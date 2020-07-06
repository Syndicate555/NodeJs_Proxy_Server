const express = require("express");
const { default: Axios } = require("axios");

const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?`;
const BASE_URL2 = `http://newsapi.org/v2/everything?domains=wsj.com&apiKey=2e209d65084a4475920191f033f023ce`;

router.get("/", async (req, res) => {
  try {
    const params = new URLSearchParams({
      api_key: process.env.API_KEY,
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
