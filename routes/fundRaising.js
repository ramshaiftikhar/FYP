const express = require("express");
const router = express.Router();
const FundRaiser = require("../database/models/AppFundraiser");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
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
//, upload.single("picture")
router.post("/addFundRaisingPost/", (req, res) => {
  console.log("Data received", req.body);
  let post = req.body;
  // post.image = req.file.path;

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
