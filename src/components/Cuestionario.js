import React, { useState } from 'react';

const preguntas = [
  "¿Te has sentido sin esperanza en las últimas semanas?",
  "¿Has tenido pensamientos de que la vida no tiene sentido?",
  "¿Te sientes solo(a) la mayoría del tiempo?",
  "¿Has perdido interés en actividades que antes disfrutabas?",
  "¿Te cuesta dormir o dormir demasiado últimamente?"
];

function Cuestionario() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const responder = (valor) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaActual] = valor;
    setRespuestas(nuevasRespuestas);

    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      setMostrarResultado(true);
    }
  };

  const puntaje = respuestas.reduce((suma, r) => suma + (r || 0), 0);
  let resultado = "";
  let mensaje = "";

  if (puntaje < 5) {
    resultado = "Bajo riesgo";
    mensaje = "¡Sigue cuidándote! Recuerda que pedir ayuda es un acto de fortaleza.";
  } else if (puntaje < 10) {
    resultado = "Riesgo moderado";
    mensaje = "Te recomendamos hablar con alguien de confianza o un profesional.";
  } else {
    resultado = "Alto riesgo";
    mensaje = "Considera contactar a un especialista. No estás solo. Puedes llamar al 555-AYUDA.";
  }

  if (mostrarResultado) {
    return (
      <div className="page">
        <h2>Resultado de tu autoevaluación</h2>
        <div className="result-box">
          <h3>{resultado}</h3>
          <p>{mensaje}</p>
        </div>
        <a href="/" className="btn-primary">Volver al inicio</a>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Autoevaluación emocional</h2>
      <p><strong>Pregunta {preguntaActual + 1} de {preguntas.length}</strong></p>
      <p>{preguntas[preguntaActual]}</p>
      <div className="options">
        <button onClick={() => responder(1)}>Nunca</button>
        <button onClick={() => responder(2)}>A veces</button>
        <button onClick={() => responder(3)}>Frecuentemente</button>
      </div>
      <p style={{ fontSize: '0.9em', marginTop: '20px', color: '#666' }}>
        Esta autoevaluación es orientativa. No sustituye una consulta profesional.
      </p>
    </div>
  );
}

export default Cuestionario;
