const Validator = require("validator");
const validText = require("./valid-text");
const validArray = require("./valid-array");

module.exports = function validateJobInput(data) {
  let errors = {};

  data.company = validText(data.company) ? data.company : "";
  data.title = validText(data.title) ? data.title : "";
  data.location = validText(data.location) ? data.location : "";
  data.description = validText(data.description) ? data.description : "";
  data.skills = validArray(data.skills) ? data.skills : [];
  data.minComp = validNumber(data.minComp) ? parseInt(data.minComp) : -1;
  data.maxComp = validNumber(data.maxComp) ? parseInt(data.maxComp) : -1;

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required.";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required.";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required.";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required.";
  }
  
  if (data.skills.length === 0) {
    errors.skills = "Please select your skills.";
  }

  if (data.minComp < 0) {
    errors.minComp = "Invalid minimum compensation.";
  }

  if (data.maxComp < 0) {
    errors.maxComp = "Invalid maximum compensation.";
  }

  if (data.minComp > data.maxComp) {
    errors.comp = "Invalid compensation range.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}