const express = require("express");
const app = express();

const port = 5000;

// @homepage route
app.get("/", (req, res) => res.send("HOME PAGE"));
app.get("/xyz", (req, res) => res.send("xyz abc"));

// Server listen to PORT 5000
app.listen(port, (req, res) => console.log(`server is running at ${port}...`));
