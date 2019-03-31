const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => res.send("HOME PAGE"));

app.listen(port, (req, res) => console.log(`server is running at ${port}...`));
