import React from 'react';
import ProfileFormContainer from './profile_form/profile_form_container';

class ProfileCreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="profile-create-page">
        <ProfileFormContainer />
      </div>
    );
  }
}
 
export default ProfileCreatePage;