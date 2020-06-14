const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const FBPostsSchema = new Schema({ any: {} });
const fBPosts = mongoose.model("FB_Posts", FBPostsSchema);
module.exports = fBPosts;
