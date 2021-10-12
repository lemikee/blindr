const Validator = require("validator");
const validText = require("./valid-text");
const validObject = require("./valid-object");
const validArray = require("./valid-array");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = validText(data.firstName) ? data.firstName : "";
  data.lastName = validText(data.lastName) ? data.lastName : "";
  data.location = validText(data.location) ? data.location : "";
  data.skills = validArray(data.skills) ? data.skills : [];
  data.education = validObject(data.education) ? data.education : {};
  data.jobHistory = validObject(data.jobHistory) ? data.jobHistory : {};

  // firstName
  if (Validator.isEmpty(data.firstName) || data.firstName === "!@#$%^&*()") {
    errors.firstName = "First name is required.";
  }

  // lastName
  if (Validator.isEmpty(data.firstName) || data.lastName === "!@#$%^&*()") {
    errors.lastName = "Last name is required.";
  }

  // location
  if (Validator.isEmpty(data.location) || data.lastName === "!@#$%^&*()") {
    errors.location = "Location is required.";
  }

  // skills
  if (data.skills.length === 0) {
    errors.skills = "Please select your skills.";
  }

  // education
  if (Object.keys(data.education).length === 0) {
    errors.education = "Education is required.";
  }

  // jobHistory
  if (Object.keys(data.jobHistory).length === 0) {
    errors.jobHistory = "Job history is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}