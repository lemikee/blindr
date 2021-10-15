import React from 'react';

class ProfileEducationForm extends React.Component {
  constructor(props) {
    super(props);
    const {edu} = this.props;
    this.state = {  
      institute: edu.institute,
      from: edu.from,
      to: edu.to,
      field: edu.field
    }
  }
  
  missingInput = () => {
    const missing = [];
    Object.entries(this.state).forEach(([field, value]) => {
      if (value === "") {
        missing.push(field);
      }
    });
    return missing;
  }
  
  
  handleDone = (e) => {
    e.preventDefault();
    const missing = this.missingInput();
    if (missing.length === 0) {
      this.processForm();
    } else {
      let alertString = "Information missing: ";
      missing.forEach(item => {
        alertString += `"${item}"` + " ";
      })
      alert(alertString);
    }
  }
  

  processForm = () => {
    if (this.props.action === 'create') {
      this.props.addEducation(this.state);
    } else {
      this.props.editEducation(this.props.idx, this.state);
    }
    this.props.removeEducationForm();
    
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  

  render() { 
    return (  
      <div className="profile-inner-form-jobs">
        <label>Institution
          <input type="text"
            className='job-history-text'
            value={this.state.institute}
            onChange={this.update('institute')}
            style={{ marginLeft: '35px' }}
          />
        </label>
       
          <label>From
            <input type="date"
              className='update-date'
              value={this.state.from}
              onChange={e => this.setState({from: e.currentTarget.value})}
              style={{ marginLeft: '62px' }}
            />
          </label>
          <label>To
            <input type="date"
              className='update-date'
              value={this.state.to}
              onChange={e => this.setState({to: e.currentTarget.value})}
              style={{ marginLeft: '80px' }}
            />
          </label>
      
        <label>Field of Study
          <select className='skills-select' 
                value={this.state.field} 
                onChange={e => this.setState({field: e.target.value})}
                style={{marginLeft: '9px', width: '280px', marginTop: '5px'}}>
            <option selected value="">Select a field</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Informatics">Informatics</option>
            <option value="Math">Math</option>
          </select>
        </label>
        
        <button className='job-submit-btn extra-room' onClick={this.handleDone}>Save</button>
        <button className='job-submit-btn extra-room' onClick={this.props.removeEducationForm}>Cancel</button>
      </div>
    );
  }
}
 
export default ProfileEducationForm;