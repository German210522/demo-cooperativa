import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/info';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center text-2xl font-bold text-coop-primary">Cooperativa Demo</div>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-coop-primary font-medium">{item.name}</a>
            ))}
            <button className="bg-coop-primary text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition">Banca Virtual</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="block px-3 py-2 text-gray-700" onClick={() => setIsOpen(false)}>{item.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
}