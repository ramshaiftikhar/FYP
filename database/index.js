const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const dbURL = process.env.MONGODB_URI || "mongodb://heroku_1gmvh3vz:ssd1dih14nsluh03j2qh2p269k@ds237357.mlab.com:37357/heroku_1gmvh3vz";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true
  })
  .then(() => console.log("Mongodb connection estrablished"))
  .catch(err => console.log(err));

module.exports = mongoose.connection;
