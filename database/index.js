const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const dbURL = process.env.MONGODB_URI || "mongodb://localhost/raabta107";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true
  })
  .then(() => console.log("Mongodb connection estrablished"))
  .catch(err => console.log(err));

module.exports = mongoose.connection;
