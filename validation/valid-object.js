const validObject = (obj) => {
  return typeof obj === "object" && Object.keys(obj).length !== 0;
};

module.exports = validObject;
