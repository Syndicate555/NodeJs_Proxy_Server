const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("connected");
  res.json({
    message: "Hello from the api",
  });
});

module.exports = router;
