import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {BsPersonCircle} from 'react-icons/bs';
// import Chat from "./chat";
import ChatGoogle from "../chats/chat_google";

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
          <span>{this.props.company}</span>
          <br/>
          </div>
          <p>Senior Backend Engineer</p>
          </div>
          <FaChevronDown
            style={
              !this.state.dropdown ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }
            }
            className="chevron"
            
          />
        </div>
        <ChatGoogle dropdown={this.state} />
      </div>
    );
  }
}

export default MatchChat;
