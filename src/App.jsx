import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'; // 1. Importa Navigate
import Home from './pages/Home';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;