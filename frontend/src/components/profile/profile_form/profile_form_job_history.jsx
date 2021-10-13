import React from 'react';

class ProfileFormJobHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { job, idx, deleteJob, showEditJobHistoryForm} = this.props;
    return (  
      <div className="completed-display">
        <div className="display-section">
          <li>Company: {job.company}</li>
          <li>From: {job.from}</li>
          <li>To: {job.to}</li>
          <li>Role: {job.role}</li>
        </div>
        
        <div className="edit-delete-section">
          <button onClick={() => showEditJobHistoryForm(idx)}>Edit</button>
          <button onClick={() => deleteJob(idx)}>Delete</button>
        </div>
      </div>
    );
  }
}
 
export default ProfileFormJobHistory;