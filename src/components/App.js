import React from "react";
import "../styles/App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";

export default function App() {
  return (
    <div className="app">
      <Router>
        {/* Header  */}
        <Switch>
          <Route path="/" exact>
            {/* Tinder Cards  */}
            <Header />
            <TinderCards />
            {/* Swipe buttons  */}
            <SwipeButtons />
            {/* Buttons  */}
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/chat">
            <Header backButton="/chat" />
            <Chats />
          </Route>
        </Switch>
        {/* Chat screen  */}
        {/* Individual chat screen  */}
      </Router>
    </div>
  );
}
