import React from 'react';

class JobPostingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {company, location, title, description, skills, minComp, maxComp} = this.props.rec;
    
    
    return (  
      <div className="card-info-container">
        <div className="card">
          <div className='card-company'>{company}</div>
          <div className='card-title'>{title}</div>
          <div className='card-location'>{location}</div>
          <div className='card-description'>{description}</div>
          <div className='card-skills-title'>Preferred Skills</div>
          {
            skills.map((skill, idx) => (
              <div className='card-skill' key={idx}>{skill}</div>
            ))
          }
          <div className='card-skills-title'>Compensation: </div>
          <div className='card-compensation'><span style={{ color: 'green' }}>$</span>{minComp}~<span style={{ color: 'green' }}>$</span>{maxComp}</div>
        </div>
        
      </div>
    );
  }
}
 
export default JobPostingCard;