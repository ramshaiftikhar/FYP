const express = require("express");
const router = express.Router();
const FBPosts = require("../database/models/FB_Posts");

router.get("/getFBPosts/:categoryName", (req, res) => {
  const { categoryName } = req.params;
  let query = {};
  if (categoryName !== "All") {
    query = { categoryName };
  }
  FBPosts.find(
    { ...query },
    null,
    { limit: 9, sort: { _id: -1 } },
    (err, posts) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ posts });
      }
    }
  );
});

module.exports = router;
