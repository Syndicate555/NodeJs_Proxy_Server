const express = require("express");
const { default: Axios } = require("axios");

const router = express.Router();
const BASE_URL = `http://newsapi.org/v2/everything?`;

router.get("/", (req, res) => {
  try {
    const params = new URLSearchParams({
      api_key: process.env.API_KEY,
      domains: "wsj.com",
    });

    // 1. make a request to the api
    const { data } = await axios.get(`${BASE_URL}${params}`);

    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
