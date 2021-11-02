import React from 'react';
import {Link} from 'react-router-dom';

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
      company: this.props.info.profile.company,
      industry: this.props.info.profile.industry,
      size: this.props.info.profile.size,
      jobs: this.props.info.jobs
    }));
  }

  render(){
    if (!this.props.info) return null;
    return (
      <div className='user-profile'>
        <div className='profile-container'>
          <div className='profile-info-container' style={{marginLeft: '0px'}}>
            <h1><span>Profile</span></h1>
            <div className='profile-info'>
              <div className='info-box'>
                <header>Name</header>
                <p>{this.state.firstName} {this.state.lastName}</p>
              </div>
              <div className='info-box'>
                <header>Company</header>
                <p>{this.state.company}</p>
              </div>
              <div className='info-box'>
                <header>Industry</header>
                <p>{this.state.industry}</p>
              </div>
              <div className='info-box'>
                <header>Size</header>
                <p>{this.state.size}</p>
              </div>
              <div className='info-box'>
                <header>Job Postings</header>
                <div className='sub-box'>
                  {this.state.jobs.map(job => {
                    return (
                      <div>
                        {job.title}{job.location}{job.description}{job.skills}{job.minComp}{job.maxComp}
                      </div>
                    );
                  })}
                </div>
                <Link to='/posting/create'><button>Create</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployerProfile;