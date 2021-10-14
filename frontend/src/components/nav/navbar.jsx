import React, { useState } from "react";
import { FaUser, FaRegAddressCard } from "react-icons/fa";
import MatchChat from "./match_chat";
import Chat from "./chat"

export default function NavBar(props) {
  const [chats, setChats] = useState(["Facebook", "Yahoo", "Google"]);

  return (
    <div className="navbar">
      <div className="navbar-header">
        <FaUser className="profile-btn" />
        <FaRegAddressCard className="profile-btn matches" />
      </div>
      <div className="match-chats">
        {chats.map((chat) => {
          return <MatchChat company={chat} />;
        })}
      </div>
      {/* <div>
        <Chat dataParentToChild={chats} />
      </div> */}
    </div>
  );
}
