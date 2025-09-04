import React from 'react';
import './nav-hero.css'; 

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenido a TekiWieri</h1>
        <p>App para tu bienestar emocional. 💜</p>
        <a href="/cuestionario" className="btn-primary">Hacer autoevaluación</a>
      </div>
    </section>
  );
}

export default Home;
