import React, { useState } from "react";
import { FaUser, FaRegAddressCard } from "react-icons/fa";
import MatchChat from "./match_chat";
import { Link } from "react-router-dom";
import MatchChatFacebook from "./chats_rooms/matches/match_chat_facebook";
import MatchChatYahoo from "./chats_rooms/matches/match_chat_yahoo";
import MatchChatGoogle from "./chats_rooms/matches/match_chat_google";
import MatchChatCoin from "./chats_rooms/matches/match_chat_coinbase";
import MatchChatApple from "./chats_rooms/matches/match_chat_apple";
import MatchChatGitlab from "./chats_rooms//matches/match_chat_gitlab";
import MatchChatInsta from "./chats_rooms/matches/match_chat_instacart";
import MatchChatRemix from "./chats_rooms/matches/match_chat_remix";

// export default function NavBar(props) {
//   // const [chats, setChats] = useState(["Facebook", "Yahoo", "Google"]);

  
//   return (
//     <div className="navbar">
//       <div className="navbar-header">
//         <Link to="/profile"><FaUser className="profile-btn" /></Link>
//         <Link to="/recs"><FaRegAddressCard className="profile-btn matches" /></Link>  
//       </div>

//       <div className="match-chats">
//         <MatchChatFacebook company={"Facebook"} />
//         <MatchChatYahoo company={"Yahoo"} />
//         <MatchChatGoogle company={"Google"} />
//         <MatchChatApple company={"Apple"} />
//         <MatchChatCoin company={"Coinbase"} />
//         <MatchChatGitlab company={"Gitlab"} />
//         <MatchChatInsta company={"Instacart"} />
//         <MatchChatRemix company={"Remix"} />
//       </div>
//     </div>
//   );
// }

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserMatches(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <Link to="/profile"><FaUser className="profile-btn" /></Link>
          <Link to="/recs"><FaRegAddressCard className="profile-btn matches" /></Link>  
        </div>
  
        <div className="match-chats">
          <MatchChatFacebook company={"Facebook"} />
          {/* <MatchChatYahoo company={"Yahoo"} /> */}
          <MatchChatGoogle company={"Google"} />
          <MatchChatApple company={"Apple"} />
          {/* <MatchChatCoin company={"Coinbase"} />
          <MatchChatGitlab company={"Gitlab"} />
          <MatchChatInsta company={"Instacart"} />
          <MatchChatRemix company={"Remix"} /> */}
          {Object.values(this.props.matches).map(match => <MatchChat match={match}/>)}
        </div>
      </div>
    );
  }
}

export default NavBar;