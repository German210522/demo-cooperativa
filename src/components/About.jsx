import React from 'react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Imagen con diseño decorativo */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition duration-500" 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Equipo de trabajo" 
            />
          </div>

          {/* Contenido de texto */}
          <div>
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Más que un banco, somos una familia</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Desde 1970, hemos trabajado bajo un modelo de economía solidaria. A diferencia de los bancos tradicionales, aquí tú no eres un cliente, eres un <span className="font-bold text-coop-primary">dueño</span>.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Transparencia total en tus ahorros.',
                'Inversión en proyectos comunitarios locales.',
                'Beneficios educativos para socios e hijos.'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-6 h-6 bg-coop-accent text-white rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="text-coop-primary font-bold hover:text-teal-800 transition border-b-2 border-coop-primary pb-1">
              Conoce nuestra historia &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}