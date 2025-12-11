import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats'; // <--- Importar esto
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats /> 
      <Services />
      
      {/* Footer mejorado simple */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Cooperativa Demo</h2>
          <p className="text-gray-400 mb-8">Construyendo futuros sólidos desde 1970.</p>
          <div className="text-sm text-gray-500 pt-8 border-t border-gray-800">
            © 2025 Jz SYSTEMS. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;