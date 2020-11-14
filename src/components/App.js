import React from "react";
import "../styles/App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      {/* Header  */}
      <Router>
        <Header />
        <Switch>
          <Route to="/">
            <h1>Home Page</h1>
          </Route>
        </Switch>
        {/* Tinder Cards  */}
        {/* Buttons  */}
        {/* Chat screen  */}
        {/* Individual chat screen  */}
      </Router>
    </div>
  );
}
