import React from 'react';

class ProfileJobHistoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      company: "",
      from: "",
      to: "",
      role: "",
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
      this.props.addJobHistory(this.state);
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
        <label>Company
          <input type="text"
            value={this.state.company}
            onChange={this.update('company')}
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
        <label>Role:
          <input type="text"
            onChange={this.update('role')}
          />
        </label>
        <button onClick={this.handleDone}>Done</button>
        <button onClick={this.props.removeJobHistoryForm}>Cancel</button>
      </div>
    );
  }
}
 
export default ProfileJobHistoryForm;