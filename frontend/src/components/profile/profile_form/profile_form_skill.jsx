import React from 'react';

class ProfileFormSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    const { skill, idx, deleteSkill } = this.props;
    return (  
      <div>
        <div className='skill'><button className='close' type='button' onClick={() => deleteSkill(idx)}>✕</button>{skill}</div>
      </div>
    );
  }
}
 
export default ProfileFormSkill;