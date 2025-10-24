// src/components/Directorio.js
import React, { useState } from 'react';
import specialistsData from './data/especialistas.json';

export default function Directorio() {
  const [locationFilter, setLocationFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [modalityFilter, setModalityFilter] = useState('');

  const specialties = [...new Set(specialistsData.map(s => s.especialidad))];
  const locations = [...new Set(specialistsData.map(s => s.ubicacion))];
  const modalities = ['Presencial', 'Virtual'];

  const filtered = specialistsData.filter(s => {
    return (
      (locationFilter === '' || s.ubicacion === locationFilter) &&
      (specialtyFilter === '' || s.especialidad === specialtyFilter) &&
      (modalityFilter === '' || s.modalidad === modalityFilter)
    );
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Directorio de Apoyo Profesional</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select 
          value={locationFilter} 
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Todas las ubicaciones</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <select 
          value={specialtyFilter} 
          onChange={(e) => setSpecialtyFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Todas las especialidades</option>
          {specialties.map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>

        <select 
          value={modalityFilter} 
          onChange={(e) => setModalityFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Todas las modalidades</option>
          {modalities.map(mod => (
            <option key={mod} value={mod}>{mod}</option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((s, i) => (
            <div key={i} className="p-4 border rounded shadow-sm">
              <h3 className="font-bold text-lg">{s.nombre}</h3>
              <p><strong>Especialidad:</strong> {s.especialidad}</p>
              <p><strong>Ubicación:</strong> {s.ubicacion}</p>
              <p><strong>Modalidad:</strong> {s.modalidad}</p>
              <p><strong>Contacto:</strong> {s.contacto}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron especialistas con esos filtros.</p>
        )}
      </div>
    </div>
  );
}
