import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Cuestionario from "./components/Cuestionario";
import Directorio from './components/Directorio';
import ContenidoEducativo from './components/ContenidoEducativo';
import RiskMap from './components/RiskMap';
import Difusion from './components/Difusion'; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuestionario" element={<Cuestionario />} />
            <Route path="/directorio" element={<Directorio />} />
            <Route path="/contenido" element={<ContenidoEducativo />} />
            <Route path="/mapa-riesgo" element={<RiskMap />} />
            <Route path="/difusion" element={<Difusion />} />
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
    alert(
      "🚨 Botón SOS activado\n\nLlama al 555-AYUDA o chatea con un psicólogo.\nNo estás solo. Estamos aquí para ti."
    );
  };

  return (
    <button className="sos-button" onClick={handleSOS}>
      SOS
    </button>
  );
}

export default App;

