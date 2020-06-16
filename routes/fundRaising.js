const express = require("express");
const router = express.Router();
const FundRaiser = require("../database/models/AppFundraiser");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "raabta-folder",
    format: async (req, file) => "png", // supports promises as well
    public_id: (req, file) => "computed-filename-using-request",
    api_key: "634276184112865",
    api_secret: "MUPGN_rhj4zbapb5XZ7b45VQD6U",
    cloud_name: "honeycombcloud",
  },
});

const upload = multer({ storage: storage });

router.get("/getFundRaisingPosts/:categoryName", (req, res) => {
  const { categoryName } = req.params;
  let query = {};
  if (categoryName !== "All") {
    query = { categoryName };
  }
  FundRaiser.find(
    query,
    null,
    { limit: 6, sort: { _id: -1 } },
    (err, posts) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ posts });
      }
    }
  );
});
router.get("/userFundRaising", (req, res) => {
  FundRaiser.find(
    { email: req.user.email },
    null,
    { limit: 9, sort: { _id: -1 } },
    (err, fundRaisePosts) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ fundRaisePosts });
      }
    }
  );
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
