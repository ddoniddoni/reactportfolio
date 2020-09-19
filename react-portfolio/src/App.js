import React from "react";
import "./App.css";
import Screen from "./Screen";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Screen />
      </div>
    </div>
  );
}

export default App;
