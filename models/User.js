const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    default: "!@#$%^&*()",
    required: true,
  },
  lastName: {
    type: String,
    default: "!@#$%^&*()",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    default: [],
    required: true,
  },
  jobHistory: {
    type: Array,
    default: [],
    required: true,
  },
  education: {
    type: Array,
    default: [],
    required: true,
  },
  location: {
    type: String,
    default: "!@#$%^&*()",
    required: true,
  },
  completeProfile: {
    type: Boolean,
    default: false,
  },
  canRelocate: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("users", UserSchema); // first arg is what model will be called, second is schema we want to pass in to create the model
module.exports = User;
