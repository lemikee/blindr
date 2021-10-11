const Validator = require("validator");
const validText = require("./valid-text");
const validArray = require("./valid-array");
const validObject = require("./valid-object");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = validText(data.firstName) ? data.firstName : "";
  data.lastName = validText(data.lastName) ? data.lastName : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : ""; // for when user enters password a second time to confirm
  data.location = validText(data.location) ? data.location : "";
  data.skills = validArray(data.skills) ? data.skills : [];
  data.education = validArray(data.education) ? data.education : {};
  data.jobHistory = validObject(data.jobHistory) ? data.jobHistory : {};

  if (!Validator.isLength(data.handle, { min: 2, max: 30 })) {
    errors.handle = "Handle must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Handle field is required..";
  }
  
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required.";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

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
    isValid: Object.keys(errors).length === 0
  };
};