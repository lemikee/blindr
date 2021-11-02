const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI; // returns object in config/keys, so need to key into it w/ mongo.URI
const users = require("./routes/api/users");
const employers = require("./routes/api/employers");
const matches = require("./routes/api/matches");
const chats = require("./routes/api/chats");
const jobs = require("./routes/api/jobs");
const User = require("./models/User");
const Employer = require("./models/Employer");
const bodyParser = require("body-parser"); // tells our app what sorts of requests it should respond to
const passport = require("passport");
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(passport.initialize());
require("./config/passport")(passport);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", users); // app.use, if we get a request that starts with api/users, we will pass in users (above) //, ie route is /api/users/test, where test is defined in users.js
app.use("/api/employers", employers);
app.use("/api/matches", matches);
app.use("/api/chats", chats);
app.use("/api/jobs", jobs);

// we want to tell app object that we want it to listen an a given port
const port = process.env.PORT || 5001; // use port given or use 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// now when we run node app.js in terminal and navigate to localhost:5000, we see hello world!
