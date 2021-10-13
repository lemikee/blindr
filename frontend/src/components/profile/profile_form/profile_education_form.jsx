import React from 'react';

class ProfileEducationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      institute: "",
      from: "",
      to: "",
      field: ""
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
      this.props.addEducation(this.state);
    } else {
      let alertString = "Information missing: ";
      missing.forEach(item => {
        alertString += `"${item}"` + " ";
      })
      alert(alertString);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  

  render() { 
    return (  
      <div className="profile-inner-form">
        <label>Institute 
          <input type="text"
            value={this.state.institute}
            onChange={this.update('institute')}
          />
        </label>
        <div>
          <label>From:
            <input type="date"
              onChange={e => this.setState({from: e.currentTarget.value})}
            />
          </label>
          <label>To:
            <input type="date"
              onChange={e => this.setState({to: e.currentTarget.value})}
            />
          </label>
        </div>
        <label>Field of Study:
          <select value={this.state.field} onChange={e => this.setState({field: e.target.value})}>
            <option selected value="">Select a field</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Informatics">Informatics</option>
            <option value="Math">Math</option>
          </select>
        </label>
        
        <button onClick={this.handleDone}>Done</button>
        <button onClick={this.props.removeEducationForm}>Cancel</button>
      </div>
    );
  }
}
 
export default ProfileEducationForm;