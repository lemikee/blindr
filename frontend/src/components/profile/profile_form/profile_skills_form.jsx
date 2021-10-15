import React from 'react';

class ProfileSkillsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      skill: ""
    }
  }
  
  SKILLS_LIST = () => (
    ['JavaScript', 'SQL', 'Java', 'Ruby', 'PHP', 'Python', 'C', 'C++', 'C#', 'HTML', 'CSS']
  )
  availableSkills = () => (
    this.SKILLS_LIST().filter(skill => {
      return !this.skillSelected(skill)
    })
  )
  
  skillSelected = skill => (
    this.props.skills.includes(skill)
  )
  
  handleDone = (e) => {
    e.preventDefault();
    if (this.state.skill === "") {
      alert("You must select a skill")
    } else {
      this.props.addSkill(this.state.skill);
    }
  }

  render() { 
    return (  
      <div className="profile-inner-form">
        <label>
          <select className='skills-select'value={this.state.skill} onChange={e => this.setState({skill: e.target.value})}>
            <option selected value="">Select a skill</option>
            {
              this.availableSkills().map(skill => (
                <option value={skill}>{skill}</option>
              ))
            }
          </select>
        </label>
        <button className='skills-submit-btn'onClick={this.handleDone}>Add</button>
        <button className='skills-submit-btn' onClick={this.props.removeSkillsForm}>Cancel</button>
      </div>
    );
  }
}
 
export default ProfileSkillsForm;