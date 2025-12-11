import React from 'react';

const testimonials = [
  {
    name: "María González",
    role: "Emprendedora Local",
    content: "Gracias al crédito PYME de la cooperativa pude renovar toda la maquinaria de mi panadería. El proceso fue rápido y humano.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos Méndez",
    role: "Socio desde 2010",
    content: "Mis ahorros han crecido más aquí que en cualquier otro banco. Me siento seguro sabiendo que mi dinero ayuda a mi comunidad.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Ana Lucía Paz",
    role: "Profesora",
    content: "La atención al cliente es inigualable. Siempre me reciben con una sonrisa y resuelven mis dudas al instante.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-coop-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Lo que dicen nuestros socios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300">
              <div className="flex items-center justify-center mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-coop-accent" />
              </div>
              <p className="text-gray-300 italic mb-6">"{t.content}"</p>
              <h4 className="font-bold text-white">{t.name}</h4>
              <span className="text-coop-accent text-sm">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}