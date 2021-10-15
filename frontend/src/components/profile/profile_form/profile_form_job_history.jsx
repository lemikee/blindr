import React from 'react';
import { MdModeEdit } from 'react-icons/md'
import { BsTrashFill } from 'react-icons/bs'

class ProfileFormJobHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { job, idx, deleteJob, showEditJobHistoryForm} = this.props;
    return (  
      <div className="job-history-item">
        <div className="sub-box">
          <div className='job-history-title'>{job.company}</div>
          <div className='job-history-role'>{job.role}</div>
          <div className='job-history-dates'>From {job.from} to {job.to}</div>
        </div>
        
        <div className="job-history-btns">
          <MdModeEdit className='update-btn' onClick={() => showEditJobHistoryForm(idx)} />
          <BsTrashFill className='update-btn' onClick={() => deleteJob(idx)} />
        </div>
      </div>
    );
  }
}
 
export default ProfileFormJobHistory;