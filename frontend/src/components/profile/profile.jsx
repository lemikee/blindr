import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import { FaEdit } from 'react-icons/fa';
import { BsCalendarWeekFill } from 'react-icons/bs';
import {AiOutlineTeam} from 'react-icons/ai'
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: this.props.userInfo.firstName,
      lastName: this.props.userInfo.lastName,
      skills: this.props.userInfo.skills ? this.props.userInfo.skills : [],
      education: this.props.userInfo.education ? this.props.userInfo.education : [],
      jobHistory: this.props.userInfo.jobHistory ? this.props.userInfo.jobHistory : [],
      location: this.props.userInfo.location,
      relocate: this.props.userInfo.canRelocate,
      loaded: false
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.getProfile(this.props.currentUser.id).then(() => this.setState({
      firstName: this.props.userInfo.firstName,
      lastName: this.props.userInfo.lastName,
      skills: this.props.userInfo.skills,
      education: this.props.userInfo.education,
      jobHistory: this.props.userInfo.jobHistory,
      location: this.props.userInfo.location,
      relocate: this.props.userInfo.canRelocate,
      loaded: true
    }))
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/');
  }

  render() { 
    if (!this.state.loaded) return <NavBarContainer />;
    return (  
      <div className='user-profile'>
        <NavBarContainer />
        <div className='profile-container'>
          <div className='profile-info-container'>
            <h1><span>Profile</span><Link to='/profile/edit'><FaEdit className='edit-btn'/></Link></h1>
            <div className='profile-info'>
              <div className='info-box'>
                <header>Name</header>
                <p>{this.state.firstName} {this.state.lastName}</p>
              </div>
              <div className='info-box'>
                <header>Skills</header>
                <div className='skills-container'>
                  
                  {this.state.skills.map(skill => {
                    return <div className='skill' style={{paddingLeft: '10px'}}>{skill}</div>
                  })}
                </div>
              </div>
              <div className='info-box'>
                <header>Job History</header>
                  <div className='sub-box'>
                  {this.state.jobHistory.map(job => {
                    return (<div className='job'>
                              <div className='job-history-title'>{job.company}</div>
                              <div className='job-history-role'>{job.role}</div>
                              <div className='job-history-dates'><BsCalendarWeekFill className='job-dates-icon'/>From {job.from} to {job.to} </div>
                            </div>);
                  })}
                  </div>
              </div>
              <div className='info-box'>
                <header>Education</header>
                  <div className='sub-box'>
                  {this.state.education.map(edu => {
                    return (<div className='job'>
                      <div className='job-history-title'>{edu.institute}</div>
                      <div className='job-history-role'>{edu.field}</div>
                      <div className='job-history-dates'><BsCalendarWeekFill className='job-dates-icon' />From {edu.from} to {edu.to} </div>
                    </div>);
                  })}
                  </div>
              </div>
              <div className='info-box flex-column'>
                <header>Current Location<div className='location'>{this.state.location}</div></header>
                <div className='relocate'>
                  Willing to relocate?
                  <p>{this.state.relocate ? 'Yes' : 'No'}</p>
                </div>
                
              </div>
              <div className='logout-btn' onClick={this.handleLogout}>Logout</div>
            </div>
            <div className='footer'></div>
          </div>
          
        </div>

      </div>
    );
  }
}
 
export default Profile;

