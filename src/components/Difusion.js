import React from 'react';
import post_ig_1 from '../materials/post-ig-1.jpeg';
import post_tiktok_1 from '../materials/post-tiktok-1.jpeg';
import qr_tekiwieri from '../materials/qr-tekiwieri.png';

export default function Difusion() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Materiales para Compartir</h2>
      
      <div className="mb-8 p-5 bg-blue-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-3">Guía para docentes</h3>
        <p className="mb-3">
          Descarga nuestra guía breve para usar Teki Wieri en el aula y promover la salud emocional.
        </p>
        <a 
          href="../materials/guia-docentes.pdf" 
          download 
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Descargar PDF
        </a>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Plantillas para redes sociales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-3 text-center">
            <img 
              src={post_ig_1}
              alt="Post Instagram" 
              className="w-full max-w-[300px] h-auto mx-auto mb-2"
            />
            <a 
              href={post_ig_1} 
              download 
              className="text-blue-600 hover:underline"
            >
              Descargar (Instagram)
            </a>
          </div>
          <div className="border rounded-lg p-3 text-center">
            <img 
              src={post_tiktok_1} 
              alt="Post TikTok" 
              className="w-full max-w-[300px] h-auto mx-auto mb-2"
            />
            <a 
              href={post_tiktok_1} 
              download 
              className="text-blue-600 hover:underline"
            >
              Descargar (TikTok)
            </a>
          </div>
        </div>
      </div>

      <div className="text-center p-5 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-3">Accede rápido con QR</h3>
        <img 
          src={qr_tekiwieri}
          alt="Código QR para Teki Wieri" 
          className="w-32 h-32 mx-auto mb-3"
        />
        <p>Escanea y comparte Teki Wieri en segundos.</p>
      </div>
    </div>
  );
}
