// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Cuestionario from "./components/Cuestionario";

// importa el CSS donde metemos nav + hero + cards
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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cuestionario from './components/Cuestionario';
import Nav from './components/Nav'; // 👈 Importamos el nuevo Nav

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* 👈 Ahora usamos Nav en lugar de Header */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuestionario" element={<Cuestionario />} />
          </Routes>
        </main>
        <Footer />
        <SOSButton />
      </div>
    </Router>
  );
}



function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 TekiWieri – Cuida tu alma</p>
    </footer>
  );
}

function SOSButton() {
  const handleSOS = () => {
    alert("🚨 Botón SOS activado\n\nLlama al 555-AYUDA o chatea con un psicólogo.\nNo estás solo. Estamos aquí para ti.");
  };

  return (
    <button className="sos-button" onClick={handleSOS}>
      SOS
    </button>
  );
}

export default App;

