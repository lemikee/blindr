const Validator = require("validator");
const validText = require("./valid-text");
const validArray = require("./valid-array");

module.exports = function validateUpdateProfileInput(data) {
  let errors = {};

  console.log(validText(data.lastName));

  // data.lastName = validText(data.lastName) ? data.lastName : "";
  // data.location = validText(data.location) ? data.location : "";
  // data.skills = validArray(data.skills) ? data.skills : [];
  // data.education = validArray(data.education) ? data.education : [];
  // data.jobHistory = validArray(data.jobHistory) ? data.jobHistory : [];

  // // firstName
  // if (Validator.isEmpty(data.firstName) || data.firstName === "!@#$%^&*()") {
  //   errors.firstName = "First name is required.";
  // }

  // // lastName
  // if (Validator.isEmpty(data.lastName) || data.lastName === "!@#$%^&*()") {
  //   errors.lastName = "Last name is required.";
  // }

  // // location
  // if (Validator.isEmpty(data.location) || data.location === "!@#$%^&*()") {
  //   errors.location = "Location is required.";
  // }

  // // skills
  // if (data.skills.length === 0) {
  //   errors.skills = "Please select your skills.";
  // }

  // // education
  // if (data.education.length === 0) {
  //   errors.education = "Education is required.";
  // }

  // // jobHistory
  // if (data.jobHistory.length === 0) {
  //   errors.jobHistory = "Job history is required.";
  // }

  // console.log(errors)

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}