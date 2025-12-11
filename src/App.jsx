import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About'; // Nuevo
import Services from './components/Services';
import Testimonials from './components/Testimonials'; // Nuevo
import Contact from './components/Contact';
import Footer from './components/Footer'; // Nuevo

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;