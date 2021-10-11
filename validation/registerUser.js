const Validator = require("validator");
const validText = require("./valid-text");
const validObject = require("./valid-object");
const validArray = require("./valid-array");

module.exports = function validateRegisterInput(data) {
  console.log(data);
  let errors = {};

  data.firstName = validText(data.firstName) ? data.firstName : "";
  data.lastName = validText(data.lastName) ? data.lastName : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : ""; // a user will enter their password a second time to confirm it
  data.location = validText(data.location) ? data.location : "";
  data.skills = validArray(data.skills) ? data.skills : [];
  data.education = validObject(data.education) ? data.education : {};
  data.jobHistory = validObject(data.jobHistory) ? data.jobHistory : {};

  // firstName
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name is required.";
  }

  // lastName
  if (Validator.isEmpty(data.firstName)) {
    errors.lastName = "Last name is required.";
  }

  // location
  if (Validator.isEmpty(data.location)) {
    errors.location = "Last name is required.";
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

  // email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required.";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  //password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required.";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
