import React from 'react';

class JobPostingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {company, location, title, description, skills, minComp, maxComp} = this.props.rec;
    
    
    return (  
      <div className="card">
        <div className="card-info-container">
          <h1>{company}</h1>
          <h2>{title}</h2>
          <h2>{location}</h2>
          <h2>Description: {description}</h2>
          <h2>Preferred Skills:</h2>
          {
            skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))
          }
          <h2>Compensation: </h2>
          <h3>${minComp}~${maxComp}</h3>
        </div>
        
      </div>
    );
  }
}
 
export default JobPostingCard;