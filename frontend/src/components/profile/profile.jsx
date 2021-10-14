import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import { FaEdit } from 'react-icons/fa';
import { BsCalendarWeekFill } from 'react-icons/bs';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      location: 'San Francisco',
      relocate: true
    }
  }
  render() { 
    let skills = ['Archery', 'Flute', 'Ballet', 'Cooking', 'Jumping', 'Talking', 'Moving'];
    let job_history = {
      1: {
        company: 'Facebook',
        role: 'Systems Engineer',
        from: '08/18',
        to: '06/21'
      },
      2: {
        company: 'Google',
        role: 'Maps Engineer',
        from: '01/16',
        to: '08/18'
      }
    };
    let edu_history = {
      1: {
        institution: 'University of Florida',
        field: 'Biology',
        from: '08/18',
        to: '06/21'
      },
      2: {
        institution: 'Harvard University',
        field: 'Mathematics & Statistics',
        from: '01/16',
        to: '08/18'
      }
    };
    return (  
      <div className='user-profile'>
        {/* <NavBarContainer /> */}
        <div className='profile-container'>
          <div className='profile-info-container'>
            <h1><span>Profile</span><FaEdit className='edit-btn'/></h1>
            <div className='profile-info'>
              <div className='info-box'>
                <header>Name</header>
                <p>Joseph Fernandez</p>
              </div>
              <div className='info-box'>
                <header>Skills</header>
                <div className='skills-container'>
                  
                  {skills.map(skill => {
                    return <div className='skill'>{skill}</div>
                  })}
                </div>
              </div>
              <div className='info-box'>
                <header>Job History</header>
                  <div className='sub-box'>
                  {Object.values(job_history).map(job => {
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
                  {Object.values(edu_history).map(edu => {
                    return (<div className='job'>
                      <div className='job-history-title'>{edu.institution}</div>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Profile;

//<button className='close' type='button'>✕</button>