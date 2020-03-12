const express = require("express");
const router = express.Router();
const FundRaiser = require("../database/models/AppFundraiser");

router.get("/getFundRaisingPosts/", (req, res) => {
  FundRaiser.find({}, (err, fundRaisePosts) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ fundRaisePosts });
    }
  });
});
router.post("/addFundRaisingPost/", (req, res) => {
  console.log(req.body);
  FundRaiser.create(req.body, (err, fundRaisePost) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Added Post");
      fundRaisePost.save();
      res.send({ success: true });
    }
  });
});

module.exports = router;
