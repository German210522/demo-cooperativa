import React from 'react';
import { services } from '../data/info';

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-coop-secondary mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-teal-50 text-coop-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <s.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}