import React from 'react';

class EmployerProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: this.props.info.profile ? this.props.info.profile.firstName : '',
      lastName: this.props.info.profile ? this.props.info.profile.lastName : '',
      email: this.props.info.profile ? this.props.info.profile.email : '',
      company: this.props.info.profile ? this.props.info.profile.company : '',
      industry: this.props.info.profile ? this.props.info.profile.industry : '',
      size: this.props.info.profile ? this.props.info.profile.size : 0,
      jobs: this.props.info.jobs ? this.props.info.jobs : []
    }
  }

  componentDidMount(){
    this.props.getEmployer(this.props.currentUser.id).then(() => this.setState({
      firstName: this.props.info.profile.firstName,
      lastName: this.props.info.profile.lastName,
      company: this.props.info.profile.company
    }));
  }

  render(){
    if (!this.props.info) return null;
    return (
      <div className='user-profile'>
        <div className='profile-container'>
          <div className='profile-info-container'>
            {this.state.company}
          </div>
        </div>
      </div>
    );
  }
}

export default EmployerProfile;