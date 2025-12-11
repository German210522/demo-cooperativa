import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/info';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-black tracking-tight ${scrolled ? 'text-coop-primary' : 'text-white'}`}>
              COOPERATIVA<span className="text-coop-accent">DEMO</span>
            </span>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`font-medium transition-colors hover:text-coop-accent ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-coop-accent hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg transition transform hover:scale-105">
              Banca Virtual
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-800' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full border-t shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="block px-3 py-3 text-gray-700 hover:bg-teal-50 hover:text-coop-primary rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}