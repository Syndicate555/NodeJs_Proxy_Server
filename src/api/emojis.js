const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("connected");
  res.json(["😀", "😳", "🙄"]);
});

module.exports = router;
