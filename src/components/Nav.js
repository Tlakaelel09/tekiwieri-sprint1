// src/components/Nav.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <header className="tw-nav">
      <div className="tw-nav__brand">
        <span className="tw-logo">🐺</span>
        <span className="tw-brand-text">TekiWieri</span>
      </div>

      <input id="tw-nav-toggle" type="checkbox" className="tw-nav__toggle" />
      <label htmlFor="tw-nav-toggle" className="tw-nav__hamburger" aria-label="Abrir menú">
        <span />
        <span />
        <span />
      </label>

      <nav className="tw-nav__links">
        <Link className={pathname === "/" ? "active" : ""} to="/">Inicio</Link>
        <Link className={pathname === "/cuestionario" ? "active" : ""} to="/cuestionario">
          Autoevaluación
        </Link>
        <a
          className="tw-cta"
          href="tel:555AYUDA"
          title="Línea de ayuda"
        >
          Línea de ayuda
        </a>
      </nav>
    </header>
  );
};

export default Nav;
