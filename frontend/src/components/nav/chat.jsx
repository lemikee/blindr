import { React, useState, useRef, useEffect } from "react";

// component for private/direct messaging with recruiter
function ChatScreen(props) {
  // will keep track of input field
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const chatScreenRef = useRef();
  let defaultMessages;
  // console.log(props.messages)

  // if localStorage does not have key messages, set it to a default value
  if (!localStorage.messages) {
    defaultMessages = [
      // {
      //   name: "Josh", // grab from db
      //   image:
      //     "https://secure.gravatar.com/avatar/18c54a45742040321ecb5c5af574b1e4?secure=true&size=300", // URL or pull from DB?
      //   message: "Hey Joey, loved your MERN project! Let's connect!",
      // },
      // {
      //   name: "Josh", // grab from db
      //   image:
      //     "https://secure.gravatar.com/avatar/18c54a45742040321ecb5c5af574b1e4?secure=true&size=300",
      //   message: "Great styling!",
      // },
      // {
      //   name: "Josh", // grab from db
      //   image:
      //     "https://secure.gravatar.com/avatar/18c54a45742040321ecb5c5af574b1e4?secure=true&size=300",
      //   message: "Would you be free for a phone screening this week?",
      // },
      // {
      //   message:
      //     "Hey Josh, a little swamped with the MERN project but I should be available Thursday!",
      // },
    ];
    localStorage.messages = JSON.stringify(defaultMessages);
    // console.log("DNE")
  }

  const [messages, setMessages] = useState(JSON.parse(localStorage.messages));

  useEffect(() => {
    // uses localStorage for persistant messages upon refresh
    // localStorage.messages = JSON.stringify(messages);
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
      let data = {
        userId: props.currentUser.id,
        jobId: props.match._id,
        message: input
      }
      props.sendMessage(data)
      // setMessages([...messages, { message: input }]); // adds message from input to messages array on ln 10
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
          {props.messages.map((message, i) =>
            (<div key={i} className={Object.keys(message)[0] === "Employer" ? "chat-screen-message recruiter" : "chat-screen-message user"}>
                <p className={Object.keys(message)[0] === "Employer" ? "chat-screen-recruiter" : "chat-screen-user"}>{Object.values(message)[0]}</p>
              </div>
            ))}
        </div>
      </div>
      <form className="chat-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat-screen-input"
          placeholder="type a message..."
          type="text"
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
