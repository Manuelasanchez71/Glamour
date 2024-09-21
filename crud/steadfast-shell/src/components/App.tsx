// src/components/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavbarInicio from './NavbarInicio'; // Importar NavbarInicio
import Login from './Login';
import Registrar from './Registrar';
import Footer from './Footer';
import Navbar from './Navbar';
import AgendarCita from './AgendarCita';

const App: React.FC = () => {
  const location = useLocation();
  const hideNavbarAndFooterRoutes = ['/login', '/registrar'];

  // Determinar si la página actual es la página de inicio
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-[#F2D4D6] relative">
      {/* Mostrar el NavbarInicio solo en la página de inicio */}
      {isHomePage ? <NavbarInicio /> : !hideNavbarAndFooterRoutes.includes(location.pathname) && <Navbar />}
      
      <main className="flex-grow flex justify-center items-center">
        <Routes>
          <Route path="/" element={<div>Bienvenido a la Página de Inicio</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/agendar-cita" element={<AgendarCita />} />
        </Routes>
      </main>

      {/* Mostrar el Footer solo si la ruta actual no está en hideNavbarAndFooterRoutes */}
      {!hideNavbarAndFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWithRouter: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
