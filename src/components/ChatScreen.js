import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/ChatScreen.css";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Aliyah",
      image:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/22528040_1707231549350698_8723918333928722672_n.jpg?_nc_cat=107&ccb=2&_nc_sid=85a577&_nc_ohc=3fPRmqAQ0mUAX-Cyvpy&_nc_ht=scontent-sjc3-1.xx&oh=ae96be1d9b5bac85d173a9220d035363&oe=5FD686A7",
      message: "Ты тут?",
    },
    {
      name: "Aliyah",
      image:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/22528040_1707231549350698_8723918333928722672_n.jpg?_nc_cat=107&ccb=2&_nc_sid=85a577&_nc_ohc=3fPRmqAQ0mUAX-Cyvpy&_nc_ht=scontent-sjc3-1.xx&oh=ae96be1d9b5bac85d173a9220d035363&oe=5FD686A7",
      message: "hi love ❤️",
    },
    {
      name: "Aliyah",
      image:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/22528040_1707231549350698_8723918333928722672_n.jpg?_nc_cat=107&ccb=2&_nc_sid=85a577&_nc_ohc=3fPRmqAQ0mUAX-Cyvpy&_nc_ht=scontent-sjc3-1.xx&oh=ae96be1d9b5bac85d173a9220d035363&oe=5FD686A7",
      message: "Не думала что найду тебя тут 😏",
    },
    {
      message: "Hi Aliyah, how is it going?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH ALIYAH ON 10/08/2020
      </p>
      {messages.map((message) =>
        message?.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form action="" className="chatScreen__input">
        <input
          type="text"
          placeholder="Type a message..."
          className="chatScreen__inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chatScreen__inputButton" onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
}
