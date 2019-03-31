const mongoose = require("mongoose");
const schema = mongoose.Schema();

const UserSchema = new schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  dev: {
    type: Boolean,
    required: true
  }
});

module.exports = User = mongoose.model("User", UserSchema);
