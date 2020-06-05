const express = require("express");
const router = express.Router();
const FundRaiser = require("../database/models/AppFundraiser");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./client/public/img/");
  },
  filename: function(req, file, cb) {
    const now = new Date().toISOString();
    const date = now.replace(/:/g, "-");
    cb(null, date);
  }
});

const upload = multer({ storage: storage });

router.get("/getFundRaisingPosts/", (req, res) => {
  FundRaiser.find({}, (err, fundRaisePosts) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ fundRaisePosts });
    }
  });
});
router.post("/addFundRaisingPost/", upload.single("file"), (req, res) => {
  console.log("Data received", req.body);
  let post = req.body;
  post.image = req.file.path;

  FundRaiser.create(post, (err, fundRaisePost) => {
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
