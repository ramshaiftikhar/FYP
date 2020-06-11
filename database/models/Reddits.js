const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const RedditsSchema = new Schema({ any: {} });
const reddits = mongoose.model("Reddits", RedditsSchema);
module.exports = reddits;
