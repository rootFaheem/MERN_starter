const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("Users Page");
});

// @user POST route
router.post("/", (req, res) => {
  const { name, age } = req.body;

  const newUser = new User({
    name: name,
    age: age
  });

  newUser
    .save()
    .then(user => {
      res.json({ msg: "your data is saved.... " });
    })
    .catch(err => console.log(err));
});

module.exports = router;
