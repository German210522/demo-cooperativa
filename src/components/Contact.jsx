import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias! En un demo real, esto enviaría un correo al asesor.");
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
          {/* Lado Izquierdo: Información */}
          <div className="bg-coop-primary p-10 text-white md:w-2/5">
            <h2 className="text-3xl font-bold mb-6">Hablemos</h2>
            <p className="text-teal-100 mb-8">
              ¿Tienes dudas sobre cómo afiliarte o solicitar un crédito? Visítanos o escríbenos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="mt-1 text-coop-accent" />
                <span>Av. Reforma 12-34, Zona 9<br/>Ciudad de Guatemala</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-coop-accent" />
                <span>(502) 2222-0000</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-coop-accent" />
                <span>info@cooperativademo.com</span>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="mt-1 text-coop-accent" />
                <div>
                  <p>Lun - Vie: 8:00 AM - 5:00 PM</p>
                  <p>Sáb: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Formulario */}
          <div className="p-10 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-coop-primary focus:ring-2 focus:ring-teal-200 outline-none transition" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-coop-primary focus:ring-2 focus:ring-teal-200 outline-none transition" placeholder="5555-5555" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-coop-primary focus:ring-2 focus:ring-teal-200 outline-none transition" placeholder="ejemplo@correo.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-coop-primary focus:ring-2 focus:ring-teal-200 outline-none transition" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="w-full bg-coop-secondary hover:bg-gray-800 text-white font-bold py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}