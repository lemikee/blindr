const express = require("express");
const router = express.Router();
const Job = require("../../models/Job");
const Employer = require("../../models/Employer");
const validateJobInput = require("../../validation/postJob");

router.post("/postJob", (req, res) => {
  console.log('here')
  const { errors, isValid } = validateJobInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newJob = new Job({
    company: req.body.company,
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    skills: req.body.skills,
    minComp: req.body.minComp,
    maxComp: req.body.maxComp
  })

  newJob.save()
    .then( job => res.json(job) )
    .catch( err => console.log(err) );

})

router.patch("/updateJob/:jobId", (req, res) => {

  const { errors, isValid } = validateJobInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Job.findOneAndUpdate(
    { _id: req.params.jobId },
    { $set: {
        company: req.body.company,
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        skills: req.body.skills,
        minComp: parseInt(req.body.minComp),
        maxComp: parseInt(req.body.maxComp),
      }},
    { returnOriginal: false },
  ).then( job => res.json(job))

});

router.delete("/deleteJob/:jobId", (req, res) => {

  Employer.find({ jobIds: req.params.jobId })
    .then( cursor => {
      cursor.forEach( employer => {
        let i = employer.jobIds.indexOf( req.params.jobId );
        let newJobIds = employer.jobId.slice(0, i).concat(employer.jobId.slice(i+1));

        Employer.findOneAndUpdate(
          { _id: employer._id },
          { $set: {
            jobIds: newJobIds,
          }}
        )
      })
    })

  Job.deleteOne({ _id: req.params.jobId })
    .then( job => {
      return res.json(job);
    })
    
})