import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../styles/Chat.css";

export default function Chat({ name, message, timestamp, profilePic }) {
  return (
    <div className="chat">
      <Avatar className="chat__image" alt={name} src={profilePic} />
      <div className="chat__details">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
  );
}
