import React from 'react';
import { MdModeEdit } from 'react-icons/md'
import { BsTrashFill } from 'react-icons/bs'

class ProfileFormEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {edu, idx, deleteEducation, showEditEducationForm} = this.props;
    return (  
      <div className="job-history-item">
        <div className="sub-box">
          <div className='job-history-title'>{edu.institute}</div>
          <div className='job-history-role'>{edu.field}</div>
          <div className='job-history-dates'>From {edu.from} to {edu.to}</div>
        </div>
        <div className="job-history-btns">
          <MdModeEdit className='update-btn' onClick={() => showEditEducationForm(idx)} />
          <BsTrashFill className='update-btn' onClick={() => deleteEducation(idx)} />
        </div>
      </div>
    );
  }
}
 
export default ProfileFormEducation;