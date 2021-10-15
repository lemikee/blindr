import { React, useState, useRef, useEffect } from "react";

// component for private/direct messaging with recruiter
function ChatScreen(props) {
  // will keep track of input field
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const chatScreenRef = useRef();
  let defaultMessages;

  // console.log(props.dropdown.company);

  // if localStorage does not have key messages, set it to a default value
  if (!localStorage.messagesRemix) {
    defaultMessages = [
      {
        name: "Josh", // grab from db
        image:
          "https://secure.gravatar.com/avatar/18c54a45742040321ecb5c5af574b1e4?secure=true&size=300", // URL or pull from DB?
        message: "Hey, you have the skills we're looking for! Would you be free for a chat with our team on Thursday?",
      },
      {
        message:
          "Of course! I've been hoping to match with Remix!",
      },
    ];
    localStorage.messagesRemix = JSON.stringify(defaultMessages);
    // console.log("DNE")
  }

  const [messagesRemix, setMessages] = useState(JSON.parse(localStorage.messagesRemix));

  useEffect(() => {
    // uses localStorage for persistant messages upon refresh
    localStorage.messagesRemix = JSON.stringify(messagesRemix);
    if (props.dropdown) {
      let number =
        chatScreenRef.current.scrollHeight - inputRef.current.scrollHeight;
      // console.log(number);
      chatScreenRef.current.scroll(0, number);
    }
  });

  const handleSend = (e) => {
    e.preventDefault();
    if (input !== "") {
      setMessages([...messagesRemix, { message: input }]); // adds message from input to messages array on ln 10
      setInput(""); // clears input field
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-screen" ref={chatScreenRef}>
        {/* <p className="chat-screen_timestamp">
                You matched from Josh from Google on 10/12/2021
            </p> */}
        {/* iterates through all messages above ie ln 29, and displays them */}
        {/* ln 43, checks if there is name (recruiter), if not we will know its a message from the user */}
        <div className="chat-messages">
          {messagesRemix.map((message) =>
            message.name ? (
              <div className="chat-screen-message recruiter">
                <p className="chat-screen-recruiter">{message.message}</p>
              </div>
            ) : (
              <div className="chat-screen-message user">
                <p className="chat-screen-user">{message.message}</p>
              </div>
            )
          )}
        </div>
      </div>
      <form className="chat-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat-screen-input"
          placeHolder="type a message..."
          typetype="text"
          ref={inputRef}
        />
        <button className="chat-send-btn" onClick={handleSend}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
