// src/components/ContenidoEducativo.jsx
import React from 'react';

export default function ContenidoEducativo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contenidos Educativos Validados</h2>

      {/* Artículo breve */}
      <section className="mb-8 p-4 border rounded bg-gray-50">
        <h3 className="font-bold text-lg mb-2">¿Qué hacer si alguien piensa en el suicidio?</h3>
        <p>
          Escuchar sin juzgar es el primer paso. No minimices su dolor ni digas frases como “es solo una etapa”. 
          Pregúntale directamente: “¿Estás pensando en quitarte la vida?”. Esto no aumenta el riesgo, sino que abre la puerta al apoyo.
        </p>
        <p>
          Anímalo a buscar ayuda profesional. En México, puede llamar a la <strong>Línea UNAM</strong>: 55 5622 2222 (24/7), 
          o al <strong>CVV Teléfono de la Esperanza</strong>: 55 5259 8121.
        </p>
        <p>
          Quédate con esa persona hasta que esté a salvo. No lo dejes solo si hay riesgo inminente.
        </p>
        <p className="italic mt-2">
          — Validado por Cinthia Marisol Reyes Tapia, suicidóloga. Octubre 2025.
        </p>
      </section>

      {/* Infografías */}
      <section className="mb-8">
        <h3 className="font-bold text-lg mb-2">Infografías oficiales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium">Señales de alerta (INSPI)</h4>
            <img 
              src="/infografias/inspi_infografia.png" 
              alt="Infografía INSPI" 
              className="w-full border rounded mt-2"
            />
          </div>
          <div>
            <h4 className="font-medium">Cómo apoyar (OMS)</h4>
            <img 
              src="/infografias/oms_infografia.png" 
              alt="Infografía OMS" 
              className="w-full border rounded mt-2"
            />
          </div>
        </div>
      </section>

      {/* Video */}
      <section>
        <h3 className="font-bold text-lg mb-2">Video: Prevención del suicidio</h3>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/JqX1cX0jKqU"
          title="Prevención del suicidio - Secretaría de Salud"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded"
        ></iframe>
      </section>
    </div>
  );
}
