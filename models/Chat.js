const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  recruiterMessages: {
    type: Array,
    default: [],
    required: true,
  },
  userMessages: {
    type: Array,
    default: [],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model("chats", ChatSchema); // first arg is what model will be called, second is schema we want to pass in to create the model
module.exports = Chat;
