const express = require("express");
const router = express.Router();
const Reddits = require("../database/models/Reddits");

router.get("/getRedditsPosts/", (req, res) => {
  Reddits.find({}, (err, redditsPosts) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ redditsPosts });
    }
  });
});

module.exports = router;
