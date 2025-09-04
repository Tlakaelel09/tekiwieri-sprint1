import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cuestionario from './components/Cuestionario';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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

function Header() {
  return (
    <header className="header">
      <h1>TekiWieri</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/cuestionario">Autoevaluación</a>
      </nav>
    </header>
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
