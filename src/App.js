// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Cuestionario from "./components/Cuestionario";

// Importa el CSS global (nav + hero + helpers)
import "./components/nav-hero.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuestionario" element={<Cuestionario />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

