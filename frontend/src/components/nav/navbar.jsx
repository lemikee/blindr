import React from 'react';
import { FaUser, FaRegAddressCard } from 'react-icons/fa';
import MatchChat from './match_chat';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  render() { 
    let chats = ['Facebook', 'Yahoo', 'Google', 'Facebook', 'Yahoo', 'Google', 'Facebook', 'Yahoo', 'Google', 'Facebook', 'Yahoo', 'Google', 'Facebook', 'Yahoo', 'Google'];
    return (  
      <div className='navbar'>
        <div className='navbar-header'>
          <FaUser className='profile-btn'/>
          <FaRegAddressCard className='profile-btn matches'/>
        </div>
        <div className='match-chats'>
          {chats.map(chat => {
            return <MatchChat company={chat} />
          })}
        </div>
      </div>
    );
  }
}
 
export default NavBar;