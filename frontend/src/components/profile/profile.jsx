import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import { FaEdit } from 'react-icons/fa'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

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
    return (  
      <div className='user-profile'>
        <NavBarContainer />
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
                <div>
                  {Object.values(job_history).map(job => {
                    return <div className='job'></div>
                  })}
                </div>
              </div>
              <div className='info-box'>
                <header>Education</header>
              </div>
              <div className='info-box flex-column'>
                <header>Current Location</header>
                <p>Willing to relocate?</p>
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