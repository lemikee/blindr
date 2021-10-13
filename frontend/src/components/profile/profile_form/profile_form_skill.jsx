import React from 'react';

class ProfileFormSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    const { skill, idx, deleteSkill } = this.props;
    return (  
      <div className="completed-display editable-display">
        <li>{skill}</li>
        <button onClick={() => deleteSkill(idx)}>Delete</button>     
      </div>
    );
  }
}
 
export default ProfileFormSkill;