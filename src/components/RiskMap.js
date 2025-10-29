import React, { useEffect, useRef } from 'react';

export default function RiskMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Solo ejecutar en el navegador
    if (typeof window !== 'undefined' && window.L) {
      const L = window.L;

      // Coordenadas de Bahía de Banderas, Nayarit
      const map = L.map(mapRef.current).setView([20.8300, -105.3000], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      // Zonas simuladas dentro del municipio
      const zones = [
        { name: "Valle de Banderas", coords: [20.8500, -105.2800], risk: "alto" },
        { name: "San Vicente", coords: [20.8100, -105.3200], risk: "medio" },
        { name: "Nuevo Vallarta", coords: [20.7900, -105.3500], risk: "bajo" },
        { name: "Mezcales", coords: [20.8200, -105.3100], risk: "alto" }
      ];

      const getColor = (risk) => {
        return risk === "alto" ? "#ef4444" : risk === "medio" ? "#f59e0b" : "#10b981";
      };

      zones.forEach(zone => {
        L.circleMarker(zone.coords, {
          radius: 12,
          color: getColor(zone.risk),
          fillColor: getColor(zone.risk),
          fillOpacity: 0.7
        })
        .addTo(map)
        .bindPopup(`<b>${zone.name}</b><br>Riesgo emocional: ${zone.risk}`);
      });
    }
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mapa de Riesgo – Bahía de Banderas, Nayarit</h2>
      <p className="mb-4 text-gray-700">
        Visualización de zonas con mayor índice de riesgo emocional, basada en datos agregados de los cuestionarios.
      </p>
      <div ref={mapRef} style={{ height: "500px", width: "100%", borderRadius: "8px", border: "1px solid #ddd" }} />
      <p className="mt-2 text-sm text-gray-600">
        Datos simulados. Actualización trimestral recomendada por stakeholders.
      </p>
    </div>
  );
}
