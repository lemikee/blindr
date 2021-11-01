import React from "react";
import { FaUser, FaRegAddressCard } from "react-icons/fa";
import {BiLogOut} from 'react-icons/bi';
import MatchChatContainer from "./match_chat_container";
import MatchChat from "./match_chat";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import MatchChatFacebook from "./chats_rooms/matches/match_chat_facebook";
import MatchChatYahoo from "./chats_rooms/matches/match_chat_yahoo";
import MatchChatGoogle from "./chats_rooms/matches/match_chat_google";
import MatchChatCoin from "./chats_rooms/matches/match_chat_coinbase";
import MatchChatApple from "./chats_rooms/matches/match_chat_apple";
import MatchChatGitlab from "./chats_rooms//matches/match_chat_gitlab";
import MatchChatInsta from "./chats_rooms/matches/match_chat_instacart";
import MatchChatRemix from "./chats_rooms/matches/match_chat_remix";


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.getUserMatches(this.props.currentUser.id);
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <button onClick={this.handleLogout}><BiLogOut className="navbar-header-logout"/></button>
          <div className="navbar-header-right">
            <Link to="/profile"><FaUser className="profile-btn" /></Link>
            <Link to="/recs"><FaRegAddressCard className="profile-btn matches" /></Link> 
          </div>
           
        </div>
  
        <div className="match-chats">
          <MatchChatFacebook company={"Facebook"} />
          {/* <MatchChatYahoo company={"Yahoo"} /> */}
          <MatchChatGoogle company={"Google"} />
          <MatchChatApple company={"Apple"} />
          {Object.values(this.props.matches).map(match => <MatchChatContainer match={match}/>)}
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);