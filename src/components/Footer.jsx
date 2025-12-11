import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
        {/* Columna 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">COOPERATIVA<span className="text-coop-accent">DEMO</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Impulsando el desarrollo económico y social de nuestros asociados a través de servicios financieros solidarios desde hace más de 50 años.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-200">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#inicio" className="hover:text-coop-accent transition">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-coop-accent transition">Productos y Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-coop-accent transition">Quiénes Somos</a></li>
            <li><a href="#contacto" className="hover:text-coop-accent transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Legal */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-200">Legal y Seguridad</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-coop-accent transition">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-coop-accent transition">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-coop-accent transition">Consejos de Seguridad</a></li>
            <li><a href="#" className="hover:text-coop-accent transition">Transparencia</a></li>
          </ul>
        </div>

        {/* Columna 4: Social */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-200">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-coop-primary transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-coop-primary transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-coop-primary transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2025 Cooperativa Demo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}