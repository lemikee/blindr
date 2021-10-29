import React from 'react';
import { Redirect } from 'react-router-dom';
// sub forms
import ProfileEducationForm from './profile_education_form';
import ProfileJobHistoryForm from './profile_job_history_form';
import ProfileSkillsForm from './profile_skills_form';
// to display the current items
import ProfileFormSkill from './profile_form_skill';
import ProfileFormEducation from './profile_form_education';
import ProfileFormJobHistory from './profile_form_job_history';
import LoadingIcon from '../../loading_icon';
import ProfileError from '../profile_error';


class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.userInfo)
    this.state = {
      email: this.props.currentUser.email,
      firstName: this.props.userInfo.firstName ? this.props.userInfo.firstName : '',
      lastName: this.props.userInfo.lastName ? this.props.userInfo.lastName : '',
      education: this.props.userInfo.education ? this.props.userInfo.education : [],
      jobHistory: this.props.userInfo.jobHistory ? this.props.userInfo.jobHistory : [],
      skills: this.props.userInfo.skills ? this.props.userInfo.skills : [],
      location: this.props.userInfo.location !== "!@#$%^&*()" ? this.props.userInfo.location : 'San Francisco',
      relocate: this.props.userInfo.canRelocate === true,
      loaded: false,
      // for ui elements
      showEducationForm: false,
      eduFormIdx: -1,
      showJobHistoryForm: false,
      jobFormIdx: -1,
      showSkillsForm: false
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationChanged = this.handleLocationChanged.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    if (this.props.formType === 'Edit your profile'){
    this.props.getProfile(this.props.currentUser.id).then(() => this.setState({
      email: this.props.currentUser.email,
      firstName: this.props.userInfo.firstName,
      lastName: this.props.userInfo.lastName,
      education: this.props.userInfo.education,
      jobHistory: this.props.userInfo.jobHistory,
      skills: this.props.userInfo.skills,
      location: this.props.userInfo.location,
      relocate: this.props.userInfo.canRelocate,
      loaded: true
    }))
    } else {
      this.setState({
        loaded: true, 
        location: 'San Francisco', 
        firstName: '', 
        lastName: '',
        education: [],
        jobHistory: [],
        skills: [], 
        relocate: false})
    }
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
    }
  )
  
  handleSubmit(e) {
    e.preventDefault();
    this.state.email = this.props.currentUser.email;
    this.props.updateProfile( this.props.currentUser.id, this.filterState()).then(() => this.props.history.push('/profile'))
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

  renderErrors() {
    if (!Object.keys(this.props.errors).length){

        return null;
    }
    return (
        <ul className='modal-errors'>
            {Object.keys(this.props.errors).map((error, i) => (
                <li key={`error-${i}`}>
                    {this.props.errors[error]}
                </li>
            ))}
        </ul>
    );
  }
  
  render() { 
    if (!this.state.loaded) return null;
    return (  
        
      <div className="profile-info">
        
        <h1>{this.props.formType}</h1>
        <div onSubmit={this.handleSubmit}>
          <div className="info-box update">
            <header style={{marginBottom: '20px'}}>Basic Information</header>
            <div className='info-and-errors'>
            <label><span className='info-name'>First Name</span>
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                
                className='info-name-input'
              />
              
            </label>
            {this.props.errors.firstName ? <ProfileError message={this.props.errors.firstName}/> : null}
            </div>
            <br/>
            <div className='info-and-errors'>
            <label><span className='info-name'>Last Name</span>
              <input type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
                
                className='info-name-input'
              />
            </label>
            {this.props.errors.lastName ? <ProfileError message={this.props.errors.lastName}/> : null}
            </div>
          </div>
          <div className="info-box update">
            <header>Education</header>
            {this.props.errors.education ? <ProfileError message={this.props.errors.education} nonBasic={true}/> : null}
            { this.displayEducation()}
            { this.educationForm()}
            <button className='skills-btn add-btn' style={this.state.showEducationForm ? { display: 'none' } : { display: 'block' }}onClick={() => this.setState({showEducationForm: true})}>Add</button>
          </div>
          <div className="info-box update">
            <header>Work History</header>
            {this.props.errors.jobHistory ? <ProfileError message={this.props.errors.jobHistory} nonBasic={true}/> : null}
            { this.displayJobHistory()}
            { this.jobHistoryForm()}
            <button className='skills-btn add-btn' style={this.state.showJobHistoryForm ? { display: 'none' } : { display: 'block' }}onClick={() => this.setState({showJobHistoryForm: true})}>Add</button>
          </div>
          <div className="info-box update">
            <header>Skills</header>
            {this.props.errors.skills ? <ProfileError message={this.props.errors.skills} nonBasic={true}/> : null}
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
                        style={{display: 'block', marginTop: '15px'}}>Which location is closest to you?</span>
              <br />
              <select 
                value={this.state.location} 
                onChange={this.handleLocationChanged}
                className='location-dropdown'
                >
                  
                <option selected value="San Francisco">San Francisco</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Austin">Austin</option>
                <option value="New York">New York</option>
              </select>
            </label>
            </div>
            <div style={{display: 'flex'}}>
            <p className='info-name'>Willing to relocate?</p>
            <label style={{height: '20px'}}>
              <input type="checkbox"
                checked={this.state.relocate}
                onChange={() => this.setState({relocate: !this.state.relocate})}
                style={{marginRight: '40px', marginTop: '32px'}}
                />
              </label>
            </div>
          </div>
        
          
          <button className='profile-submit-btn' onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
        
  
    );
  }
}
 
export default ProfileForm;