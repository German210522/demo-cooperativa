import React from 'react';
import { services } from '../data/info';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Adorno de fondo */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Nuestros Servicios</h2>
          <h3 className="text-4xl font-bold text-gray-900">Soluciones que te hacen crecer</h3>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Herramientas financieras modernas con el respaldo tradicional de tu cooperativa de confianza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center mb-6 text-coop-primary group-hover:bg-coop-primary group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
              <p className="text-gray-500 mb-6 leading-relaxed">{service.desc}</p>
              
              <a href="#" className="inline-flex items-center text-coop-primary font-semibold group-hover:text-teal-700 transition-colors">
                Más información <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}