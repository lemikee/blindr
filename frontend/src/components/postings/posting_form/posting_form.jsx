import React from 'react';
import ProfileSkillsForm from '../../profile/profile_form/profile_skills_form';
import ProfileFormSkill from '../../profile/profile_form/profile_form_skill';
import {postJob} from '../../../util/employers_util'

class PostingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      company: "",
      title: "",
      location: "",
      description: "",
      skills: [],
      showSkillsForm: false,
      minComp: 0,
      maxComp: 999999
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChanged = this.handleLocationChanged.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    postJob({
      employerId: this.props.currentEmployer.id,
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
      skills: this.state.skills,
      minComp: this.state.minComp,
      maxComp: this.state.maxComp
    })
    .then(() => this.props.history.push('/employer'));
  }

  handleLocationChanged(e) {
    this.setState( {location: e.target.value});
  }
  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  updateComp(field) {
    return e => this.setState({ [field]: parseInt(e.currentTarget.value) });
  }
  
  // Skills Form
  skillsForm = () => (
    this.state.showSkillsForm ?
    <ProfileSkillsForm 
      removeSkillsForm={this.removeSkillsForm} 
      addSkill={this.addSkill}
      skills={this.state.skills}/> :
      <div></div>
  )
  
  
  displaySkills = () => {
    return this.state.skills.map((skill, idx) => (
      <ProfileFormSkill 
        skill={skill}
        key={idx}
        idx={idx}
        deleteSkill={this.deleteSkill}
      /> 
    ))
  }
  
  addSkill = skill => {
    const newSkills = [...this.state.skills];
    newSkills.push(skill);
    this.setState({skills: newSkills}, () => this.removeSkillsForm());
  }

  deleteSkill = idx => {
    let newSkills = [...this.state.skills];
    newSkills.splice(idx, 1);
    this.setState({skills: newSkills});
  }
  
  removeSkillsForm = () => {
    this.setState({showSkillsForm : false});
  }
  
  
  

  render() { 
    return (  
      <div className="profile-info">
        <h1>Create Posting</h1>
        <div className="info-box update">
          <header style={{marginBottom: '20px'}}>Basic Info</header>
          <div className='posting-basic'>
          <label><span className='info-name'>Company</span>
            <input 
              type="text"
              value={this.state.company}
              onChange={this.update('company')}  
              className='info-name-input'
              style={{marginLeft: '30px', width: '260px'}}
            />
          </label>
          <br /><br />
          <label><span className='info-name'>Title</span>
            <input 
              type="text"
              value={this.state.title}
              onChange={this.update('title')}  
              className='info-name-input'
              style={{marginLeft: '65px', width: '260px'}}
            />
          </label>
          <br /><br />
          <div style={{display: 'flex'}}>
          <span className='info-name'>Description</span>
          <label>
            <textarea  value={this.state.description}
              onChange={this.update('description')} 
              className='info-name-input'
              style={{marginLeft: '20px', width: '260px', height: '150px'}}
            />
          </label>
          </div>
          <br />
          </div>
        </div>
        
        <div className="info-box update">
          <header>Skills</header>
            <div className='skills-container' style={this.state.showSkillsForm ? {marginTop: '20px'}: {}}>
            { this.displaySkills()}
            </div>
            { this.skillsForm()}
            <button className='skills-btn add-btn' style={this.state.showSkillsForm ? {display: 'none'} : {display: 'block'}}onClick={() => this.setState({showSkillsForm: true})}>Add</button>
        </div>

        <div className="info-box flex-column">
          <div>
            <header>Location</header>
            <label><span className='info-name'
                        style={{display: 'inline-block', marginTop: '15px'}}>Which location is closest to you?</span>
              
              <select 
                value={this.state.location} 
                onChange={this.handleLocationChanged}
                className='location-dropdown'
                style={{marginLeft: '120px'}}
                >
                  
                <option selected value="San Francisco">San Francisco</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Austin">Austin</option>
                <option value="New York">New York</option>
              </select>
            </label>
          </div>
        </div>
      
        <div className="info-box update">
          <header style={{marginBottom: '20px'}}>Compensation</header>
          <label><span className='info-name'>Minimum</span>
            <input 
              type="number"
              value={this.state.minComp}
              onChange={this.updateComp('minComp')}  
              className='info-name-input'
            />
          </label>
          <label><span className='info-name'>Minimum</span>
            <input 
              type="number"
              value={this.state.maxComp} 
              onChange={this.updateComp('maxComp')}  
              className='info-name-input'
            />
          </label>
        </div>
      
        <button className='profile-submit-btn' onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
 
export default PostingForm;