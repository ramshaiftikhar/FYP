const express = require("express");
const router = express.Router();
const FBPosts = require("../database/models/FB_Posts");

router.get("/getFBPosts/", (req, res) => {
  FBPosts.find({}, (err, fBPosts) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ fBPosts });
    }
  });
});

module.exports = router;
