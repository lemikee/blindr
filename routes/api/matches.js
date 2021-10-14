const express = require("express");
const router = express.Router();
const Match = require("../../models/Match");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");

router.post("/createMatch", (req, res) => {

  Match.findOne({ user: req.body.userId })
  
});

// Takes userId, returns all matches and their associated job descriptions.
router.get("/getMatches/:userId", (req, res) => {

  Match.findOne({ userId: req.params.userId })
    .then( match => {
      const jobArr = match.jobs;

      
    })

})

module.exports = router;