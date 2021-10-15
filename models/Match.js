const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  jobs: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const Match = mongoose.model("matches", MatchSchema);
module.exports = Match;