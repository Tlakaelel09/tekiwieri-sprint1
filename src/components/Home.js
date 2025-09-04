import React from 'react';

function Home() {
  return (
    <div className="page">
      <h2>Bienvenido a TekiWieri</h2>
      <p>
        Tu espacio seguro para cuidar tu salud emocional.
        Aquí puedes conocer tu estado emocional y acceder a ayuda inmediata si la necesitas.
      </p>
      <a href="/cuestionario" className="btn-primary">
        Iniciar autoevaluación
      </a>
    </div>
  );
}

export default Home;
