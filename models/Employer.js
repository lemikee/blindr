const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
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
  company: {
    type: String,
    default: "!@#$%^&*()",
    required: true,
  },
  industry: {
    type: String,
    default: "!@#$%^&*()",
    required: true,
  },
  size: {
    type: String,
    default: "!@#$%^&*()",
    required: true,
  },
  jobIds: {
    type: Array,
    default: [],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Employer = mongoose.model("employers", EmployerSchema); // first arg is what model will be called, second is schema we want to pass in to create the model
module.exports = Employer;