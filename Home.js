// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="tw-hero">
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
            <a className="btn ghost" href="tel:555AYUDA" title="Línea de ayuda">
              Línea de ayuda
            </a>
          </div>
        </div>
      </section>

      <section className="tw-features">
        <article className="card">
          <h3>HU-01 · Botón SOS</h3>
          <p>Acceso inmediato a contacto de emergencia desde cualquier vista.</p>
        </article>
        <article className="card">
          <h3>HU-02 · Cuestionarios</h3>
          <p>Autoevaluación para detectar riesgo emocional con retroalimentación.</p>
        </article>
        <article className="card">
          <h3>HU-06 · UI/UX</h3>
          <p>Interfaz clara, accesible y completamente responsiva.</p>
        </article>
      </section>
    </>
  );
};

export default Home;
