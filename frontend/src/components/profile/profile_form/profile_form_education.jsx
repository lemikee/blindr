import React from 'react';

class ProfileFormEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {edu, idx, deleteEducation, showEditEducationForm} = this.props;
    return (  
      <div className="completed-display">
        <div className="display-section">
          <li>Institute: {edu.institute}</li>
          <li>From: {edu.from}</li>
          <li>To: {edu.to}</li>
          <li>Field of Study: {edu.field}</li>
        </div>
        <div className="edit-delete-section">
          <button onClick={() => showEditEducationForm(idx)}>Edit</button>
          <button onClick={() => deleteEducation(idx)}>Delete</button>
        </div>
      </div>
    );
  }
}
 
export default ProfileFormEducation;