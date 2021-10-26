const express = require("express");
const router = express.Router();
const Employer = require("../../models/Employer");
const Job = require("../../models/Job");
const validateJobInput = require("../../validation/postJob");

router.post("/postJob", (req, res) => {

  const { errors, isValid } = validateJobInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const employerId = req.body.employerId;

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
    .then( job => {
      Employer.findOne({ _id: employerId })
        .then( employer => {
          employer.jobIds.push(job.id)
          // PLACEHOLDER FOR TESTING
        })
      return res.json(job)
    } )
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
  ).then( job => {
    const payload = {
      company: job.company,
      title: job.title,
      location: job.location,
      description: job.description,
      skills: job.skills,
      minComp: parseInt(job.minComp),
      maxComp: parseInt(job.maxComp),
    }

    return res.json({ job: payload })
  })

});