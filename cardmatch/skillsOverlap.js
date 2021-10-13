function skillsOverlap (userSkillsArr, jobSkillsArr) {
  userSkillsArr.forEach( skill => {
    if (jobSkillsArr.includes(skill)) {
      return true;
    }
  })
  return false;
}

module.exports = skillsOverlap;