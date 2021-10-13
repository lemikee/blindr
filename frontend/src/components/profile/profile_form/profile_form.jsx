import React from 'react';
import ProfileEducationForm from './profile_education_form';
import ProfileJobHistoryForm from './profile_job_history_form';
import ProfileSkillsForm from './profile_skills_form';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      firstName: '',
      lastName: '',
      education: [],
      jobHistory: [],
      skills: [],
      location: '',
      relocate: false,
      // for ui elements
      showEducationForm: false,
      showJobHistoryForm: false,
      showSkillsForm: false
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChanged = this.handleLocationChanged.bind(this);
  }
  
  
  removeEducationForm = () => {
    this.setState({showEducationForm: false});
  }
  
  removeJobHistoryForm = () => {
    this.setState({showJobHistoryForm: false});
  }
  
  removeSkillsForm = () => {
    this.setState({showSkillsForm : false});
  }


  
  addEducation = education => {
    const newEducation = [...this.state.education];
    newEducation.push(education);
    this.setState({education: newEducation}, () => this.removeEducationForm());
  }
  
  addJobHistory = jobHistory => {
    const newJobHistory = [...this.state.jobHistory];
    newJobHistory.push(jobHistory);
    this.setState({jobHistory: newJobHistory}, () => this.removeJobHistoryForm());
  }
  
  addSkill = skill => {
    const newSkills = [...this.state.skills];
    newSkills.push(skill);
    this.setState({skills: newSkills}, () => this.removeSkillsForm());
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  
  handleLocationChanged(e) {
    this.setState( {location: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('create profile submitted');
  }


  educationForm = () => (
    this.state.showEducationForm ?
      <ProfileEducationForm 
        removeEducationForm={this.removeEducationForm}
        addEducation={this.addEducation}/> :
      <div></div>
  )
  
  jobHistoryForm = () => (
    this.state.showJobHistoryForm ?
    <ProfileJobHistoryForm
      removeJobHistoryForm={this.removeJobHistoryForm}
      addJobHistory={this.addJobHistory}/> :
      <div></div>
  )
  
  skillsForm = () => (
    this.state.showSkillsForm ?
    <ProfileSkillsForm 
      removeSkillsForm={this.removeSkillsForm} 
      addSkill={this.addSkill}
      skills={this.state.skills}/> :
      <div></div>
  )
  
  displayEducation = () => {
    return this.state.education.map(item => (
      <div className="completed-display">
        <li>Institute: {item.institute}</li>
        <li>From: {item.from}</li>
        <li>To: {item.to}</li>
        <li>Field of Study: {item.field}</li>
      </div>
    ));
  }
  
  displayJobHistory = () => {
    return this.state.jobHistory.map(item => (
      <div className="completed-display">
        <li>Company: {item.company}</li>
        <li>From: {item.from}</li>
        <li>To: {item.to}</li>
        <li>Role: {item.role}</li>
      </div>
    ));
  }
  
  displaySkills = () => {
    return this.state.skills.map(skill => (
      <div className="completed-display editable-display">
        <li>{skill}</li>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      
    ))
  }
  
  render() { 

    return (  
      <div className="profile-create-page">
        <div className="profile-create-container">
          <h1>Create your profile!</h1>
          <div onSubmit={this.handleSubmit}>
            <div className="create-form-section">
              <h2>Basic Information</h2>
              <label>First Name:
                <input type="text"
                  value={this.state.firstName}
                  onChange={this.update('firstName')}
                  placeholder="First Name"
                />
              </label>
              <label>Last Name:
                <input type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  placeholder="Last Name"
                />
              </label>
            </div>
            <div className="create-form-section">
              <h2>Education</h2>
              { this.displayEducation()}
              { this.educationForm()}
              <button onClick={() => this.setState({showEducationForm: true})}>Add Education</button>
            </div>
            <div className="create-form-section">
              <h2>Work History</h2>
              { this.displayJobHistory()}
              { this.jobHistoryForm()}
              <button onClick={() => this.setState({showJobHistoryForm: true})}>Add Work Experience</button>
            </div>
            <div className="create-form-section">
              <h2>Skills</h2>
              { this.displaySkills()}
              { this.skillsForm()}
              <button onClick={() => this.setState({showSkillsForm: true})}>Add Skill</button>
            </div>
            <div className="create-form-section">
              <h2>Location</h2>
              <label>Which location is closest to you?
                <select value={this.state.location} onChange={this.handleLocationChanged}>
                  <option selected value="">Select a location</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Austin">Austin</option>
                  <option value="New York">New York</option>
                </select>
              </label>
              <label>Willing to relocate?
                <input type="checkbox"
                  checked={this.state.relocate}
                  onChange={() => this.setState({relocate: !this.state.relocate})}
                 />
              </label>
            </div>
          
  
            <button onClick={this.handleSubmit}>Submit!</button>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default ProfileForm;