module.exports = function (userSkillsArr, jobSkillsArr) {
  userSkillsArr.forEach( skill => {
    if (jobSkillsArr.includes(skill)) {
      return true;
    }
  })
  return false;
}