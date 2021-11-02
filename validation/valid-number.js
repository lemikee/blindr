const validNumber = (num) => {
  return typeof parseInt(num) === "number";
};

module.exports = validNumber;