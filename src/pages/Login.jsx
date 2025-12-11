import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de carga
    setTimeout(() => {
      setLoading(false);
      alert("✅ Acceso concedido (Demo). Aquí entraría al Dashboard del usuario.");
      navigate('/'); // Regresa al home por ahora
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Lado Izquierdo: Imagen y Branding (Oculto en celular) */}
      <div className="hidden lg:flex w-1/2 bg-coop-primary relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-teal-900/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          className="absolute w-full h-full object-cover" 
          alt="Seguridad Bancaria" 
        />
        <div className="relative z-20 text-white text-center px-12">
          <ShieldCheck size={80} className="mx-auto mb-6 text-coop-accent" />
          <h2 className="text-4xl font-bold mb-4">Banca Virtual Segura</h2>
          <p className="text-teal-100 text-lg">Gestiona tus ahorros, créditos y pagos desde la comodidad de tu hogar con la máxima seguridad.</p>
        </div>
      </div>

      {/* Lado Derecho: Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative">
        {/* Botón Volver */}
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-8 left-8 flex items-center text-gray-500 hover:text-coop-primary transition"
        >
          <ArrowLeft size={20} className="mr-2" /> Volver al inicio
        </button>

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Cooperativa<span className="text-coop-accent">EnLínea</span></h1>
            <p className="text-gray-500 mt-2 text-sm">Ingresa tus credenciales para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usuario / Código de Socio</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={20} />
                </div>
                <input 
                  type="text" 
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coop-primary focus:border-coop-primary outline-none transition"
                  placeholder="Ej: 12345678"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-gray-400" size={20} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coop-primary focus:border-coop-primary outline-none transition"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-coop-primary hover:text-teal-700 font-medium">¿Olvidaste tu contraseña?</a>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-coop-primary text-white font-bold py-3 rounded-lg hover:bg-teal-800 transition shadow-lg flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Ingresando...
                </>
              ) : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-400 border-t pt-4">
            <p className="flex justify-center items-center gap-1">
              <Lock size={12} /> Conexión Segura TLS 256-bit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}