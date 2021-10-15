import React from 'react';
import ProfileFormContainer from './profile_form/profile_form_container';
import ProfileEditContainer from './profile_edit_container';
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
            <ProfileEditContainer history={this.props.history}/>
            <div className='footer'></div>
          </div>
        </div>
      </div>
     
    );
  }
}
 
export default ProfileEdit;