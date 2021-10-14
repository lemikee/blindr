import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import UserRecCards from './rec_cards';

class Recs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="recs">
        <NavBarContainer />
        <UserRecCards />
      </div>
    );
  }
}
 
export default Recs;