const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    default: [],
    required: true,
  },
  minComp: {
    type: Number,
    required: true,
  },
  maxComp: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("jobs", JobSchema);
module.exports = Job;