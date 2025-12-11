import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <footer className="bg-coop-secondary text-gray-400 py-6 text-center text-sm">
        © 2025 Cooperativa Demo - Desarrollo Web Profesional.
      </footer>
    </div>
  );
}
export default App;