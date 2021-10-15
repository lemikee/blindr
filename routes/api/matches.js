const express = require("express");
const router = express.Router();
const Match = require("../../models/Match");
const Job = require("../../models/Job");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const ObjectId = require('mongodb').ObjectId; 
const jwt = require("jsonwebtoken");

router.post("/createMatch", (req, res) => {

  Match.findOne({ userId: ObjectId(req.body.userId) })
    .then( match => {
      if (!match) {
        Job.findOne({ _id: req.body.jobId })
          .then( job => {
            const newMatch = new Match({
              userId: ObjectId(req.body.userId),
              jobs: [job]
            })
            newMatch.save().then( match => {
              return res.json({ match: job})
            });
          })
      } else {
        console.log("Saving to existing document...")

        Job.findOne({ _id: req.body.jobId })
          .then( job => {
            Match.findOneAndUpdate(
              { userId: ObjectId(req.body.userId) },
              { $set: {
                jobs: match.jobs.concat([job]) }
              },
              { returnOriginal: false },
            ).then( match => {
              return res.json({ match: job })
            })
          })
      }
    })
});

router.delete("/deleteMatch/:userId/:jobId", (req, res) => {
})

// Takes userId, returns all matches and their associated job descriptions.
router.get("/getMatches/:userId", (req, res) => {

  Match.findOne({ userId: req.params.userId })
    .then( match => {

      Job.find({ _id: { $in: match.jobs } })
        .then( jobs => {
          const payload = {};

          jobs.forEach( job => {
            payload[job.id] = job;
          })

          return res.json({ matches: payload });

        });
    })

})


module.exports = router;