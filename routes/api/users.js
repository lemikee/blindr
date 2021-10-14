const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Job = require("../../models/Job");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../../validation/registerUser");
const validateUpdateProfileInput = require("../../validation/updateUserProfile");
const validateLoginInput = require("../../validation/login");
const skillsOverlap = require("../../cardmatch/skillsOverlap");

router.get("/test", (req, res) => {
  // this is one route
  res.json({ msg: "This is the user route" });
});

router.post("/register", (req, res) => {
  // note that this is a POST request, "router.post"

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    // from line 20, recall, validation return errors, and isValid which is a boolean
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }) // use User model, check if user already exists
    .then((user) => {
      if (user) {
        // return level 400 error is the user already exists
        return res
          .status(400)
          .json({ email: "A user is already registered with that email." });
      } else {
        // otherwise create the user and save it
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
              .then((user) => res.json({ user }) )
              .catch((err) => res.console.log(err));
          });
        });
      }
    });
});

router.patch("/updateProfile", (req, res) => {

  // check inputs are valid (i.e. not default value && not empty)
  const { errors, isValid } = validateUpdateProfileInput(req.body);
  
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  // console.log("ALL PASSED")

  // User.updateOne(
  //   { email: req.body.email },
  //   { $set: {
  //       firstName: req.body.firstName,
  //       lastName: req.body.lastName,
  //       skills: req.body.skills,
  //       jobHistory: req.body.jobHistory,
  //       education: req.body.education,
  //       location: req.body.location,
  //       canRelocate: req.body.canRelocate,
  //       completeProfile: true,
  //     }
  //   }
  // ).then(payload => res.json({ success: "sucess"}))
  // .catch(error => res.json({ error: "error"}))
});

router.post("/login", (req, res) => {
  const email = req.body.email; // extract email and password
  const password = req.body.password;

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }) // findOne returns a single object, find returns an array
    .then((user) => {
      if (!user) {
        // if user doesn't exist, give status of 404 and json saying user DNE
        return res.status(404).json({ email: "This user does not exist." });
      }

      console.log(user);

      // beyond the if statement, we do have a user, so let's check if pwd is the same
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            // payload we send back upon successful login
            id: user.id, // id will be from mongodb
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            skills: user.skills,
            jobHistory: user.jobHistory,
            education: user.education,
            location: user.location,
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

router.post("/findMatches", (req, res) => {

  User.findOne({ id: req.body.id })
    .then( (user) => {
      if (!user) {
        return res.status(404).json({ user: "This user does not exist" });
      } else {
        let matches = {};
        let userSkillsArr = user.skills;

        let jobs = Job.find({})

        jobs.forEach( job => {
          let jobData = tojson(job);
          if (skillsOverlap(userSkillsArr, jobData.skills)) {
            matches[jobData.id] = jobData
          }
        })

        return res.json(matches);
      }
    })

});

module.exports = router;
