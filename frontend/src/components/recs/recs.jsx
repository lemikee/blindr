import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import UserRecCards from './rec_cards';
import DemoInstructions from './demo_instructions/demo_instructions';
import {Link} from 'react-router-dom';
import {AiOutlineTeam} from 'react-icons/ai'


class Recs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="user-profile">
        <NavBarContainer />
        <UserRecCards
          currentUser={this.props.currentUser}
          createMatch={this.props.createMatch}
          deleteMatch={this.props.deleteMatch}
          fetchRecommendations={this.props.fetchRecommendations}
          jobs={this.props.jobs}
        />
        <DemoInstructions />
        <Link className="about-us-link" to="/about"><AiOutlineTeam className="about-us-icon"/> About Us </Link>
      </div>
    );
  }
}
 
export default Recs;