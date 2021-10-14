import React from 'react';
import ProfileFormContainer from './profile_form/profile_form_container';
import NavBarContainer from '../nav/navbar_container';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (  
      <div className='user-profile'>
        <NavBarContainer />
        <div className='profile-container'>
          <div className='profile-info-container'>
            <ProfileFormContainer />
          </div>
        </div>
      </div>
     
    );
  }
}
 
export default ProfileEdit;