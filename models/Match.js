const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: 'jobs'
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const Match = mongoose.model("matches", MatchSchema);
module.exports = Match;