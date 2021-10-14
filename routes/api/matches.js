const express = require("express");
const router = express.Router();
const Match = require("../../models/Match");
const Job = require("../../models/Job");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");

router.post("/createMatch", (req, res) => {

  console.log("Creating...")
  console.log(req.body)

  // Match.findOne({ user: req.body.userId })
  //   .then( match => {
  //     match.jobs.push(req.body.jobId)
      
  //     Job.findOne({ _id: req.body.jobId})
  //       .then( job => {
  //         const payload = {
  //           [req.body.jobId]: job
  //         };
          
  //         return res.json({ match: payload });
  //       })
  //   })

});

router.delete("/deleteMatch/:userId/:jobId", (req, res) => {

  console.log("Deleting...");
  console.log(req.params);

  // Match.findOne({ user: req.body.userId })
  //   .then( match => {
      
  //     const jobIdx = match.jobs.indexOf(req.body.jobId)
  //     match.jobs.splice(jobIdx, 1)

  //     return res.json({ match: "Deleted successfully"});
  //   })
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

          return res.json({ match: payload });

        });
    })

})


module.exports = router;