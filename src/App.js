import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/UI/Header";

//components

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
