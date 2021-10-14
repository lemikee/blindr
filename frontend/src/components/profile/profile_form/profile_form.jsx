import React from 'react';
// sub forms
import ProfileEducationForm from './profile_education_form';
import ProfileJobHistoryForm from './profile_job_history_form';
import ProfileSkillsForm from './profile_skills_form';
// to display the current items
import ProfileFormSkill from './profile_form_skill';
import ProfileFormEducation from './profile_form_education';
import ProfileFormJobHistory from './profile_form_job_history';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.currentUser.email,
      firstName: '',
      lastName: '',
      education: [],
      jobHistory: [],
      skills: [],
      location: '',
      relocate: false,
      // for ui elements
      showEducationForm: false,
      eduFormIdx: -1,
      showJobHistoryForm: false,
      jobFormIdx: -1,
      showSkillsForm: false
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChanged = this.handleLocationChanged.bind(this);
  }
  

  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  
  handleLocationChanged(e) {
    this.setState( {location: e.target.value});
  }
  
  filterState = () => (
    {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      education: this.state.education,
      jobHistory: this.state.jobHistory,
      skills: this.state.skills,
      location: this.state.location,
      canRelocate: this.state.relocate,
      id: this.props.userId
    }
  )
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateProfile(this.filterState());
  }
  
  // HANDLE EDUCATION
  educationForm = () => {
    const idx = this.state.eduFormIdx;
    let education;
    let action;
    if (idx > -1) {
      education = this.state.education[idx];
      action = 'edit';
    } else {
      education = {institute: "", from: "", to: "", field: ""};
      action = 'create';
    }
    return this.state.showEducationForm ?
      <ProfileEducationForm 
        removeEducationForm={this.removeEducationForm}
        addEducation={this.addEducation}
        editEducation={this.editEducation}
        edu={education}
        idx={idx}
        action={action}/> :
      <div></div>
  }

  displayEducation = () => {
    return this.state.education.map((edu, idx) => (
      <ProfileFormEducation 
        edu={edu}
        key={idx}
        idx={idx}
        deleteEducation={this.deleteEducation}
        showEditEducationForm={this.showEditEducationForm}
      />
    ));
  }
  
  addEducation = education => {
    const newEducation = [...this.state.education];
    newEducation.push(education);
    this.setState({education: newEducation}, () => this.removeEducationForm());
  }

  deleteEducation = idx => {
    let newEducation = [...this.state.education];
    newEducation.splice(idx, 1);
    this.setState({education: newEducation});
  }
  
  editEducation = (idx, edu) => {
    let newEducation = [...this.state.education];
    newEducation[idx] = edu;
    this.setState({education: newEducation, eduFormIdx: -1});
  }

  showEditEducationForm = idx => {
    this.setState({eduFormIdx: idx, showEducationForm: true});
  }
  
  removeEducationForm = () => {
    this.setState({showEducationForm: false, eduFormIdx: -1});
  }
  
  // HANDLE JOB HISTORY

  jobHistoryForm = () => {
    const idx = this.state.jobFormIdx;
    let jobHistory;
    let action;
    if (idx > -1) {
      jobHistory = this.state.jobHistory[idx];
      action = 'edit';
    } else {
      jobHistory = {company: "", from: "", to: "", role: ""};
      action = 'create';
    }
    return this.state.showJobHistoryForm ?
      <ProfileJobHistoryForm
        removeJobHistoryForm={this.removeJobHistoryForm}
        addJobHistory={this.addJobHistory}
        editJobHistory={this.editJobHistory}
        job={jobHistory}
        idx={idx}
        action={action}/> :
        <div></div>
  }
  
  displayJobHistory = () => {
    return this.state.jobHistory.map((job, idx) => (
      <ProfileFormJobHistory 
        job={job}
        key={idx}
        idx={idx}
        deleteJob={this.deleteJob}
        showEditJobHistoryForm={this.showEditJobHistoryForm}
      />
    ));
  }
  
  addJobHistory = jobHistory => {
    const newJobHistory = [...this.state.jobHistory];
    newJobHistory.push(jobHistory);
    this.setState({jobHistory: newJobHistory}, () => this.removeJobHistoryForm());
  }

  deleteJob = idx => {
    let newJobs = [...this.state.jobHistory];
    newJobs.splice(idx, 1);
    this.setState({jobHistory: newJobs});
  }

  editJobHistory = (idx, job) => {
    let newJobs = [...this.state.jobHistory];
    newJobs[idx] = job;
    this.setState({jobHistory: newJobs, jobFormIdx: -1});
  }

  showEditJobHistoryForm = idx => {
    this.setState({jobFormIdx: idx, showJobHistoryForm: true});

  }

  removeJobHistoryForm = () => {
    this.setState({showJobHistoryForm: false, jobFormIdx: -1});
  }

  // HANDLE SKILLS
  
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
              <select 
                value={this.state.location} 
                onChange={this.handleLocationChanged}
                value="Select a location">
                {/* <option selected value="">Select a location</option> */}
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
        
  
    );
  }
}
 
export default ProfileForm;