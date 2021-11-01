const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: 'jobs',
    required: true,
  },
  messages: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model("chats", ChatSchema); // first arg is what model will be called, second is schema we want to pass in to create the model
module.exports = Chat;
