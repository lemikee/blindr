const express = require("express");
const router = express.Router();
const Employer = require("../../models/Employer");
const Job = require("../../models/Job");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../../validation/registerEmployer");
const validateUpdateProfileInput = require("../../validation/updateEmployerProfile")
const validateLoginInput = require("../../validation/login");

router.get("/test", (req, res) => {
  // this is one route
  res.json({ msg: "This is the Employer route" });
});

router.post("/register", (req, res) => {
  // note that this is a POST request, "router.post"

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    // from line 20, recall, validation return errors, and isValid which is a boolean
    return res.status(400).json(errors);
  }

  Employer.findOne({ email: req.body.email }) // use Employer model, check if Employer already exists
    .then((employer) => {
      if (employer) {
        // return level 400 error is the Employer already exists
        return res
          .status(400)
          .json({
            email: "An Employer is already registered with that email.",
          });
      } else {
        // otherwise create the Employer and save it
        const newEmployer = new Employer({
          email: req.body.email,
          password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          // first arg is number of rounds we do to generate the salt, second arg is salt we get back
          bcrypt.hash(newEmployer.password, salt, (err, hash) => {
            // we salt the Employer's password
            if (err) throw err;
            newEmployer.password = hash; // set Employer's password to the hash
            newEmployer
              .save()
              .then((Employer) => res.json(Employer))
              .catch((err) => res.console.log(err));
          });
        });
      }
    });
});

router.patch("/updateProfile/:employerId", (req, res) => {

  //check inputs are valid (i.e. not default value && not empty)
  const { errors, isValid } = validateUpdateProfileInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Employer.updateOne(
    { id: req.body.id }, // ! This may need to change to params instead of boy
    { $set: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      company: req.body.company,
      industry: req.body.industry,
      size: req.body.size,
      jobIds: req.body.jobIds
      }
    })
    .then(payload => console.log(payload))
    .catch(error => console.log(error));

})

router.post("/login", (req, res) => {
  const email = req.body.email; // extract email and password
  const password = req.body.password;

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Employer.findOne({ email }) // findOne returns a single object, find returns an array
    .then((Employer) => {
      if (!Employer) {
        // if Employer doesn't exist, give status of 404 and json saying Employer DNE
        return res.status(404).json({ email: "This Employer does not exist." });
      }

      // beyond the if statement, we do have a Employer, so let's check if pwd is the same
      bcrypt.compare(password, Employer.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            // payload we send back upon successful login
            id: Employer.id, // id will be from mongodb
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            company: req.body.skills,
            industry: req.body.jobHistory,
            size: req.body.education,
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

router.get("/employerProfile/:employerId", (req, res) => {
  
  Employer.findOne({ _id: req.params.employerId })
    .then( profile => {
      Job.find({ id: { $in: profile.jobIds }})
        .then( jobs => {
          const profilePayload = {
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            company: profile.company,
            industry: profile.industry,
            size: profile.size,
          }
          return res.json({ profile: profilePayload, jobs: jobs })
        })
    })
})

module.exports = router;
