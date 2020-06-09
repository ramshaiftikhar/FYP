const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const TweetsSchema = new Schema({ any: {} });
const tweets = mongoose.model("Tweets", TweetsSchema);
module.exports = tweets;
