import React from "react";
import "./App.css";
import Screen from "./Screen";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScreenTinder from "./Screens/ScreenTinder";
import ScreenNetflix from "./Screens/ScreenNetflix";
import ScreenAirbnb from "./Screens/ScreenAirbnb";
import ScreenKakao from "./Screens/ScreenKakao";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/kakao">
              <Sidebar />
              <ScreenKakao />
            </Route>
            <Route path="/tinder">
              <Sidebar />
              <ScreenTinder />
            </Route>
            <Route path="/airbnb">
              <Sidebar />
              <ScreenAirbnb />
            </Route>
            <Route path="/netflix">
              <Sidebar />
              <ScreenNetflix />
            </Route>
            <Route path="/">
              <Sidebar />
              <Screen />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
