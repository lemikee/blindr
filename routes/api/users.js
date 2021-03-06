const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Job = require("../../models/Job");
const Match = require("../../models/Match");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const ObjectId = require('mongodb').ObjectId; 
const validateRegisterInput = require("../../validation/registerUser");
const validateUpdateProfileInput = require("../../validation/updateUserProfile");
const validateLoginInput = require("../../validation/login");
const skillsOverlap = require("../../cardmatch/skillsOverlap");

router.get("/test", (req, res) => {
  // this is one route
  res.json({ msg: "This is the user route" });
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then( user => {
      if (user) {
        return res.status(400).json({ email: "A user is already registered with that email." });
      } else {
        const newUser = new User({
          password: req.body.password,
          email: req.body.email,
        });
        
        bcrypt.genSalt(10, (err, salt) => {
          // first arg is number of rounds we do to generate the salt, second arg is salt we get back
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            // we salt the user's password
            if (err) throw err;
            newUser.password = hash; // set user's password to the hash
            newUser
              .save()
              .then( user => {
                const payload = { 
                  id: user.id,
                  email: user.email
                };

                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  { expiresIn: 3600 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token,
                    });
                  }
                );

              })
              .catch((err) => res.console.log(err));
          });
        });
      }
    });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  
  User.findOne({ email })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).json({ email: "This user does not exist." });
      }
  
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: user.id,
              email: user.email,
            };
        
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                });
              }
            );

          } else {
            return res.status(400).json({ password: "Incorrect password." });
          }
        });
    });
});
  
router.patch("/updateProfile/:userId", (req, res) => {

  const { errors, isValid } = validateUpdateProfileInput(req.body);
  
  if (!isValid) {
    console.log(errors);
    return res.status(400).json(errors);
  }

  User.findOneAndUpdate(
    { email: req.body.email },
    { $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        skills: req.body.skills,
        jobHistory: req.body.jobHistory,
        education: req.body.education,
        location: req.body.location,
        canRelocate: req.body.canRelocate,
        completeProfile: true,
      }},
    { returnOriginal: false },
  ).then( profile => {
    const payload = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      skills: profile.skills,
      jobHistory: profile.jobHistory,
      education: profile.education,
      location: profile.location,
      canRelocate: profile.canRelocate,
      completeProfile: profile.completeProfile,
    }

    return res.json({ profile: payload })
  })
});

router.get("/getProfile/:userId", (req, res) => {

  User.findOne({ _id: req.params.userId })
    .then( profile => {
      const payload = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        skills: profile.skills,
        jobHistory: profile.jobHistory,
        education: profile.education,
        location: profile.location,
        canRelocate: profile.canRelocate,
        completeProfile: profile.completeProfile,
      }
  
      return res.json({ profile: payload })
    })

});

router.get("/findRecs/:userId", (req, res) => {

    User.findOne({ _id: req.params.userId })
      .then( user => {
        Match.findOne({ userId: ObjectId(req.params.userId) })
          .then( match  => {
            const matchedJobIds = match.jobs.map( matchedJob => matchedJob._id.toString() )
            Job.find({ skills: { $elemMatch: { $in: user.skills }}})
              .then( jobs => {
                const payload = {};
                jobs.forEach( job => {
                  if (!matchedJobIds.includes(job.id)) {
                    payload[job.id] = job
                  }
                })
                return res.json({ jobs: payload })
              })

          })

      })
});

module.exports = router;
