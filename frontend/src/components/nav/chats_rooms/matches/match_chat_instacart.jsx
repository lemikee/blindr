import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import Chat from "./chat";
import ChatInstacart from "../chats/chat_instacart";

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
        <div className="match-chat">
          <p>{this.props.company}</p>
          <FaChevronDown
            style={
              !this.state.dropdown ? { display: "block" } : { display: "none" }
            }
            className="chevron"
            onClick={this.toggleDropdown}
          />
          <FaChevronUp
            style={
              this.state.dropdown ? { display: "block" } : { display: "none" }
            }
            className="chevron"
            onClick={this.toggleDropdown}
          />
        </div>
        <ChatInstacart dropdown={this.state} />
      </div>
    );
  }
}

export default MatchChat;
