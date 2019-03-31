const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = 5000;

const db = require("./config/keys").mongoURI;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// @homepage route
app.use("/", require("./routes/index"));

// @user route
app.use("/user", require("./routes/users.js"));

// Server listen to PORT 5000
app.listen(port, (req, res) => console.log(`server is running at ${port}...`));
