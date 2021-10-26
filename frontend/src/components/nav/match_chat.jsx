import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Chat from "./chat";
import ChatF from "./chats_rooms/chats/chat_facebook";
import ChatG from "./chats_rooms/chats/chat_google";
import ChatY from "./chats_rooms/chats/chat_yahoo";
import {BsPersonCircle} from 'react-icons/bs';

class MatchChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
      company: this.props.company,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({ dropdown: !this.state.dropdown });
  }

  render() {
    return (
      <div
        className={
          this.state.dropdown
            ? "match-chat-container smooth"
            : "match-chat-container"
        }
      >
        <div className="match-chat" onClick={this.toggleDropdown}>
          <div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <BsPersonCircle className='matchchat-photo' />
          <span>{this.props.match.company}</span>
          <br/>
          </div>
          <p>{this.props.match.title}</p>
          </div>
          <FaChevronDown
            style={
              !this.state.dropdown ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }
            }
            className="chevron"
            
          />
          {/* <FaChevronUp
            style={
              this.state.dropdown ? { display: "block" } : { display: "none" }
            }
            className="chevron"
            
          /> */}
        </div>
        <Chat dropdown={this.state} />
      </div>
    );
  }
}

export default MatchChat;
