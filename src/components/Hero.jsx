import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-coop-secondary text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Tu bienestar es nuestra <span className="text-coop-accent">prioridad</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-xl text-gray-300 mb-8"
        >
          Soluciones financieras solidarias para impulsar tus sueños.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <button className="bg-coop-primary hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition">Asociarme Ahora</button>
        </motion.div>
      </div>
    </section>
  );
}