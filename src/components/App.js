import React from "react";
import "../styles/App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

export default function App() {
  return (
    <div className="app">
      <Router>
        {/* Header  */}
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            {/* Tinder Cards  */}
            <Header />
            <TinderCards />
            {/* Swipe buttons  */}
            <SwipeButtons />
            {/* Buttons  */}
          </Route>
        </Switch>
        {/* Chat screen  */}
        {/* Individual chat screen  */}
      </Router>
    </div>
  );
}
