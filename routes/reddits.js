const express = require("express");
const router = express.Router();
const Reddits = require("../database/models/Reddits");

router.get("/getRedditsPosts/:categoryName", (req, res) => {
  const { categoryName } = req.params;
  let query = {};
  if (categoryName !== "All") {
    query = { categoryName };
  }
  Reddits.find(query, null, { limit: 9, sort: { _id: -1 } }, (err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ posts });
    }
  });
});

module.exports = router;
