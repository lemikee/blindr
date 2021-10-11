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
  data.company = validText(data.company) ? data.company : "";
  data.industry = validText(data.industry) ? data.industry : "";
  data.size = validText(data.size) ? data.size : "";

  // firstName
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name is required.";
  }

  // lastName
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name is required.";
  }

  // email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required.";
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

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  // company
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company is required.";
  }

  // industry
  if (Validator.isEmpty(data.industry)) {
    errors.industry = "Industry is required.";
  }

  // size
  if (Validator.isEmpty(data.size)) {
    errors.jobHistory = "Company size is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
