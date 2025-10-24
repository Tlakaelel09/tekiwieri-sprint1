// src/components/Directorio.js
import React, { useState } from 'react';
import specialistsData from '../data/especialistas.js';

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
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Directorio de Apoyo Profesional
      </h2>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          >
            <option value="">Todas las ubicaciones</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Especialidad</label>
          <select
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          >
            <option value="">Todas las especialidades</option>
            {specialties.map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Modalidad</label>
          <select
            value={modalityFilter}
            onChange={(e) => setModalityFilter(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          >
            <option value="">Todas las modalidades</option>
            {modalities.map(mod => (
              <option key={mod} value={mod}>{mod}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Resultados */}
      <div className="space-y-5">
        {filtered.length > 0 ? (
          filtered.map((s, i) => (
            <div
              key={i}
              className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900">{s.nombre}</h3>
              <div className="mt-2 space-y-1 text-gray-700">
                <p><span className="font-medium">Especialidad:</span> {s.especialidad}</p>
                <p><span className="font-medium">Ubicación:</span> {s.ubicacion}</p>
                <p><span className="font-medium">Modalidad:</span> {s.modalidad}</p>
                <p className="text-blue-600 font-medium break-words">
                  <span className="font-medium">Contacto:</span> {s.contacto}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-lg">
              No se encontraron especialistas con esos filtros.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
