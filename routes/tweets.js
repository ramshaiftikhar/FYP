const express = require("express");
const router = express.Router();
const Tweets = require("../database/models/Tweets");

router.get("/getTweetsPosts/", (req, res) => {
  Tweets.find({}, (err, tweetsPosts) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ tweetsPosts });
    }
  });
});

module.exports = router;
