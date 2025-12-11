import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 1. Imagen de fondo con filtro profesional */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Reunión Cooperativa" 
          className="w-full h-full object-cover"
        />
        {/* Degradado oscuro para que el texto se lea perfecto */}
        <div className="absolute inset-0 bg-gradient-to-r from-coop-secondary/95 via-coop-secondary/80 to-coop-secondary/40"></div>
      </div>

      {/* 2. Contenido Heroico */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="md:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-coop-accent/20 text-coop-accent border border-coop-accent/30 rounded-full px-4 py-1 font-semibold text-sm mb-4 inline-block backdrop-blur-sm">
              🚀 Más de 50 años construyendo futuro
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Impulsamos tus sueños con <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">banca solidaria</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Descubre una experiencia financiera diseñada para personas, no para números. Tasas justas, seguridad garantizada y beneficios reales.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
           <div className="flex flex-col sm:flex-row gap-4">
        <a 
            href="#contacto" 
            className="bg-gradient-to-r from-coop-primary to-teal-600 hover:from-teal-600 hover:to-teal-800 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg text-center hover:shadow-teal-500/30 transition transform hover:-translate-y-1"
        >
            Hazte Socio Hoy
        </a>
        <a 
            href="#servicios" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold text-center transition"
        >
            Conocer Servicios
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}