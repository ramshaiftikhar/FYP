const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const path = require("path");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const user = require("./routes/user");
const fundRaising = require("./routes/fundRaising");
const tweets = require("./routes/tweets");
const reddits = require("./routes/reddits");
const fbPosts = require("./routes/fbPosts");
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan("dev"));

// express-session management
app.use(
  session({
    secret: "Amir Don", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/user", user);
app.use("/", fundRaising);
app.use("/", tweets);
app.use("/", reddits);
app.use("/", fbPosts);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html")); // relative path
  });
}

app.listen(PORT, () => {
  console.log(`Server is starting at PORT: ${PORT}`);
});
