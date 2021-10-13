const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateUpdateProfileInput(data) {
  let errors = {};

  data.firstName = validText(data.firstName) ? data.firstName : "";
  data.lastName = validText(data.lastName) ? data.lastName : "";
  data.company = validText(data.company) ? data.company : "";
  data.industry = validText(data.industry) ? data.industry : "";
  data.size = validText(data.size) ? data.size : "";


  // firstName
  if (Validator.isEmpty(data.firstName) || data.firstName === "!@#$%^&*()") {
    errors.firstName = "First name is required.";
  }

  // lastName
  if (Validator.isEmpty(data.firstName) || data.lastName === "!@#$%^&*()") {
    errors.lastName = "Last name is required.";
  }

  // company
  if (Validator.isEmpty(data.company) || data.company === "!@#$%^&*()") {
    errors.company = "Company is required.";
  }

  // industry
  if (Validator.isEmpty(data.industry) || data.industry === "!@#$%^&*()") {
    errors.industry = "Industry is required.";
  }

  // size
  if (Validator.isEmpty(data.size) || data.size === "!@#$%^&*()") {
    errors.jobHistory = "Company size is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}