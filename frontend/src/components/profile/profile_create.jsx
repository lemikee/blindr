import React from 'react';

class ProfileCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      firstName: '',
      lastName: '',
      skill: [],
      jobHistory: {},
      education: {},
      location: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('create profile submitted');
  }

  render() { 
    return (  
      <div className="profile-create-page">
        <div className="profile-create-container">
          <h1>Create your profile!</h1>
          <form onSubmit={this.handleSubmit}>
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
            
            </div>
            <div className="create-form-section">
              <h2>Work History</h2>
              
            </div>
            <div className="create-form-section">
              <h2>Location</h2>
              
            </div>
          
  

          </form>
        </div>
        
      </div>
    );
  }
}
 
export default ProfileCreate;