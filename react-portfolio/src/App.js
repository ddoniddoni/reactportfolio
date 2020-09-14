import React from "react";
import "./App.css";
import Banner from "./Banner";
import Contents from "./Contents";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Contents />
    </div>
  );
}

export default App;
