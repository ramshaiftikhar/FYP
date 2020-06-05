const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const fundRaiserSchema = new Schema({
  name: { type: String, unique: true, required: true },
  email: String,
  categoryName: String,
  amount: Number,
  description: String,
  phone: String,
  dateCreated: String,
  image: { type: String, required: true },
  dateString: { type: Date, default: Date.now }
});
const fundRaiser = mongoose.model("FundRaiser", fundRaiserSchema);
module.exports = fundRaiser;
