// src/components/ContenidoEducativo.jsx
import React from 'react';

export default function ContenidoEducativo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contenidos Educativos Validados</h2>
      {/* Artículo educativo validado */}
      <section className="mb-8 p-4 border rounded-lg bg-blue-50">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          “Si habla de suicidio, es solo para llamar la atención”… ¿en serio?
        </h3>
        <p className="mb-3">
          ¿Alguna vez has escuchado esa frase? Tal vez la hayas dicho sin querer, o la hayas oído en casa, en la escuela o en redes. Pero hay algo que necesitas saber: <strong>quien habla del suicidio está pidiendo ayuda</strong>. No está “buscando atención”. Está <em>gritando en silencio</em>.
        </p>
        <p className="mb-3">
          Uno de los mitos más peligrosos sobre el suicidio es que <em>“quien de verdad quiere quitarse la vida no avisa”</em>. La realidad es justo lo contrario: <strong>hasta en 8 de cada 10 casos, la persona da señales claras</strong> antes de actuar. Puede ser un comentario como:  
        </p>
        <ul className="list-disc pl-5 mb-3 text-gray-700">
          <li>“Ya no aguanto”</li>
          <li>“Sería más fácil desaparecer”</li>
          <li>“Ustedes estarían mejor sin mí”</li>
        </ul>
        <p className="mb-3">
          Esas no son “dramatizaciones”. Son <strong>señales de alerta</strong>. Y tú, sí puedes hacer algo.
        </p>
      
        <h4 className="font-semibold text-lg mt-4 mb-2">¿Qué hacer si alguien menciona el suicidio?</h4>
        <ol className="list-decimal pl-5 mb-3 space-y-2">
          <li>
            <strong>Escucha sin juzgar.</strong> No digas “no digas eso” o “estás exagerando”. En vez de eso, pregúntale con calma:  
            <blockquote className="ml-4 italic border-l-4 border-blue-500 pl-3 my-2">
              “¿Estás pensando en quitarte la vida?”
            </blockquote>
            Sí, <strong>pregúntalo directamente</strong>. Estudios de la OMS y del Instituto Nacional de Psiquiatría confirman que hacer esta pregunta <em>no aumenta el riesgo</em>. Al contrario: abre la puerta al alivio.
          </li>
          <li>
            <strong>Quédate con esa persona.</strong> Si sientes que el riesgo es inminente, <strong>no lo dejes solo</strong>. Quédate hasta que esté a salvo o conectado con un especialista.
          </li>
          <li>
            <strong>Busca ayuda profesional.</strong> En México, hay líneas gratuitas y confidenciales:
            <ul className="list-disc pl-5 mt-1">
              <li><strong>Línea UNAM</strong>: 55 5622 2222 (24/7)</li>
              <li><strong>CVV Teléfono de la Esperanza</strong>: 55 5259 8121</li>
              <li><strong>Línea SIAP (Jalisco)</strong>: 33 3818 2000</li>
            </ul>
          </li>
        </ol>
      
        <p className="mt-3 italic font-medium text-gray-700">
          El suicidio no es una decisión, es una crisis.  
          Nadie quiere morir. Lo que quiere quien piensa en el suicidio es <em>dejar de sufrir</em>.  
          Y en ese momento de dolor, su mente no ve otras salidas. Pero <strong>la crisis es temporal</strong>.  
          Con apoyo, escucha y acompañamiento, <strong>sí se puede superar</strong>.
        </p>
      
        <p className="mt-4 text-sm text-gray-600 border-t pt-2">
          — Este artículo fue redactado por el equipo de Teki Wieri con base en guías de la OMS, el INSPI y el DIF Nacional, y validado por Cinthia Marisol Reyes Tapia, suicidóloga. Octubre 2025.
        </p>
      </section>
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
            <h4 className="font-medium">Mitos y Realidades (IMSS)</h4>
            <img 
              src="/infografias/suicidio_infografía.jpg" 
              alt="Infografía IMSS" 
              className="w-full border rounded mt-2"
            />
          </div>
          <div>
            <h4 className="font-medium">SIGNOS DE ALARMA (PAHO)</h4>
            <img 
              src="/infografias/infografia-conducta-suicida.jpg" 
              alt="Infografía PAHO" 
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
          src="https://www.youtube.com/watch?v=JidcriWvw8g&t=149s"
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
