const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const categorySchema = new Schema({
  categoryId: { type: Number, unique: true },
  categoryName: { type: String, unique: true, required: true }
});
const category = mongoose.model("Category", categorySchema);
module.exports = category;
