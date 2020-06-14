const express = require("express");
const router = express.Router();
const Tweets = require("../database/models/Tweets");

router.get("/getTweetsPosts/:categoryName", (req, res) => {
  const { categoryName } = req.params;
  let query = {};
  if (categoryName !== "All") {
    query = { categoryName };
  }
  Tweets.find(
    query,
    null,
    { limit: 9, sort: { _id: -1 } },
    (err, tweetsPosts) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ tweetsPosts });
      }
    }
  );
});

module.exports = router;
