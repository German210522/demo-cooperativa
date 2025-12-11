import React from 'react';

const stats = [
  { label: 'Socios Activos', value: '15,000+' },
  { label: 'Años de Historia', value: '55' },
  { label: 'Puntos de Servicio', value: '12' },
  { label: 'Créditos Otorgados', value: '25k' },
];

export default function Stats() {
  return (
    <section className="bg-coop-primary py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-teal-100 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}