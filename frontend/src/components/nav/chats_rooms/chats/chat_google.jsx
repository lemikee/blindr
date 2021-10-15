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
  if (!localStorage.messagesGoogle) {
    defaultMessages = [
      {
        name: "Josh", // grab from db
        image:
          "https://secure.gravatar.com/avatar/18c54a45742040321ecb5c5af574b1e4?secure=true&size=300", // URL or pull from DB?
        message: "Loved your Yelp clone, Bytes!",
      },
      {
        name: "Josh", // grab from db
        image:
          "https://secure.gravatar.com/avatar/18c54a45742040321ecb5c5af574b1e4?secure=true&size=300", // URL or pull from DB?
        message: "We'd love to do an onsite with you",
      },
      {
        name: "Josh", // grab from db
        image:
          "https://secure.gravatar.com/avatar/18c54a45742040321ecb5c5af574b1e4?secure=true&size=300", // URL or pull from DB?
        message: "Did I mention we have a SLIDE!",
      },
      {
        message:
          "I would love to!",
      },
       { message:
          "Here's my email: hire@us.com",
      }
    ];
    localStorage.messagesGoogle = JSON.stringify(defaultMessages);
    // console.log("DNE")
  }

  const [messagesGoogle, setMessages] = useState(JSON.parse(localStorage.messagesGoogle));

  useEffect(() => {
    // uses localStorage for persistant messages upon refresh
    localStorage.messagesGoogle = JSON.stringify(messagesGoogle);
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
      setMessages([...messagesGoogle, { message: input }]); // adds message from input to messages array on ln 10
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
          {messagesGoogle.map((message) =>
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
