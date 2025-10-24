// src/components/ContenidoEducativo.jsx
import React from 'react';
import suicidio_infografia from '../assets/infographics/suicidio_infografía.jpg';
import infografia_conducta_suicida from '../assets/infographics/infografia-conducta-suicida.jpg';

export default function ContenidoEducativo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contenidos Educativos Validados</h2>
      {/* Artículo educativo validado */}
      <section style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backgroundColor: '#f8fafc' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>
          “Si habla de suicidio, es solo para llamar la atención”… ¿en serio?
        </h3>
        
        <p style={{ marginBottom: '1rem' }}>
          ¿Alguna vez has escuchado esa frase? Tal vez la hayas dicho sin querer, o la hayas oído en casa, en la escuela o en redes. Pero hay algo que necesitas saber: <strong>quien habla del suicidio está pidiendo ayuda</strong>. No está “buscando atención”. Está <em>gritando en silencio</em>.
        </p>
        
        <p style={{ marginBottom: '1rem' }}>
          Uno de los mitos más peligrosos sobre el suicidio es que <em>“quien de verdad quiere quitarse la vida no avisa”</em>. La realidad es justo lo contrario: <strong>hasta en 8 de cada 10 casos, la persona da señales claras</strong> antes de actuar. Puede ser un comentario como:
        </p>
        
        <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', color: '#475569' }}>
          <li>“Ya no aguanto”</li>
          <li>“Sería más fácil desaparecer”</li>
          <li>“Ustedes estarían mejor sin mí”</li>
        </ul>
      
        <p style={{ marginBottom: '1.5rem' }}>
          Esas no son “dramatizaciones”. Son <strong>señales de alerta</strong>. Y tú, sí puedes hacer algo.
        </p>
      
        <h4 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.75rem' }}>
          ¿Qué hacer si alguien menciona el suicidio?
        </h4>
        
        <ol style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          <li>
            <strong>Escucha sin juzgar.</strong> Pregúntale con calma:  
            <blockquote style={{ margin: '0.75rem 0', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6', fontStyle: 'italic', color: '#334155' }}>
              “¿Estás pensando en quitarte la vida?”
            </blockquote>
            Sí, <strong>pregúntalo directamente</strong>. Estudios de la OMS confirman que esto <em>no aumenta el riesgo</em>.
          </li>
          <li>
            <strong>Quédate con esa persona.</strong> Si el riesgo es inminente, <strong>no lo dejes solo</strong>.
          </li>
          <li>
            <strong>Busca ayuda profesional.</strong> En México:
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
              <li><strong>Línea UNAM</strong>: 55 5622 2222</li>
              <li><strong>CVV Teléfono de la Esperanza</strong>: 55 5259 8121</li>
            </ul>
          </li>
        </ol>
      
        <p style={{ fontStyle: 'italic', fontWeight: '500', color: '#475569' }}>
          El suicidio no es una decisión, es una crisis.  
          Con apoyo, escucha y acompañamiento, <strong>sí se puede superar</strong>.
        </p>
      
        <p style={{ marginTop: '1.25rem', fontSize: '0.875rem', color: '#64748b', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
          — Este artículo fue redactado por el equipo de Teki Wieri y validado por Cinthia Marisol Reyes Tapia, suicidóloga. Octubre 2025.
        </p>
      </section>

      {/* Infografías */}
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-5 text-center">
          Infografías oficiales
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <div className="flex flex-col items-center max-w-md">
            <div className="text-center mb-3">
              <h4 className="font-semibold text-gray-800">Mitos y Realidades (IMSS)</h4>
            </div>
            <img 
              src={suicidio_infografia}
              alt="Infografía del IMSS sobre mitos y realidades del suicidio"
              className="w-full max-w-[400px] h-auto rounded-lg border border-gray-200 shadow-sm"
              loading="lazy"
            />
          </div>
      
          <div className="flex flex-col items-center max-w-md">
            <div className="text-center mb-3">
              <h4 className="font-semibold text-gray-800">Signos de alarma (OPS/PAHO)</h4>
            </div>
            <img 
              src={infografia_conducta_suicida}
              alt="Infografía de la OPS sobre signos de alarma de conducta suicida"
              className="w-full max-w-[400px] h-auto rounded-lg border border-gray-200 shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      
      {/* Video */}
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Suicidio: cómo identificar los signos de alerta</h3>
        <div className="relative pt-[56.25%] max-w-4xl mx-auto"> {/* 16:9 aspect ratio */}
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/lM0OpelBJmU?si=v1Kuy0f_fnXAfugr" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
        </iframe>
        </div>
      </section>
    </div>
  );
}
