// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import heroImage from '../../assets/hero-tekiwieri-v2.jpg';

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section 
      className="tw-hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      >
        <div className="tw-hero__content">
          <p className="eyebrow">Sprint 1 · MVP</p>
          <h1>
            Prevención con <span>TekiWieri</span>
          </h1>
          <p className="lead">
            Botón SOS y cuestionario de riesgo emocional desarrollados en React.
          </p>

          <div className="actions">
            <Link to="/cuestionario" className="btn primary">
              Ir al cuestionario
            </Link>
            <a
              className="btn ghost"
              href="tel:555AYUDA"
              title="Línea de ayuda"
            >
              Línea de ayuda
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="tw-features">
        <article className="card">
          <h3>HU-01: Botón SOS</h3>
          <p>Acceso inmediato a contacto de emergencia desde cualquier vista.</p>
        </article>

        <article className="card">
          <h3>HU-02: Cuestionario</h3>
          <p>
            Herramienta de autoevaluación para detectar niveles de riesgo
            emocional.
          </p>
        </article>

        <article className="card">
          <h3>HU-06: Interfaz amigable</h3>
          <p>
            Navegación sencilla y clara que prioriza la accesibilidad y el
            bienestar del usuario.
          </p>
        </article>
      </section>
    </>
  );
};

export default Home;
