import React from 'react';
import ProfileFormContainer from './profile_form/profile_form_container';

class ProfileCreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className='profile-create-page'>
        <div className='profile-container' style={{marginLeft: '0px'}}>
          <div className='profile-info-container' style={{ backgroundColor: 'rgb(237, 237, 237, 0.98)'}}>
            <ProfileFormContainer history={this.props.history}/>
            <div className='footer'></div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProfileCreatePage;