import React from "react";
import Chat from "./Chat";

export default function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Anelya"
        message="hey whats up🐶"
        timestamp="3 seconds ago"
        profilePic="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/41379159_694688000907027_5663218720681201112_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=ofQ6Jf3rbqIAX-stxIE&tp=18&oh=d638d0a429f04e4766c9f6c033a2b8cf&oe=5FDBB8B2"
      />
      <Chat
        name="Bella"
        message="hi love 🖤"
        timestamp="40 seconds ago"
        profilePic="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/47690460_452390461957884_4650519503071951662_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=2jmIyoTKZ4MAX83mao6&tp=18&oh=eccf7b16f22a13a846d2c03ff642fd80&oe=5FDB1F23"
      />
      <Chat
        name="Lydia"
        message="OMG, I know you 🤦‍♀️"
        timestamp="20 minutes ago"
        profilePic=""
      />
      <Chat
        name="Madlyine"
        message="hey what are u up to, cutie 🙂"
        timestamp="3 days ago"
        profilePic="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/97289071_721495895263491_7776603772220426429_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=61L4jXyoG6AAX_O-r7R&tp=19&oh=3d333adf69403bcfb027ef5d13980350&oe=5FD8D52C"
      />
    </div>
  );
}
