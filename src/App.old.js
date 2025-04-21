import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Contacts from "./Contacts";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
