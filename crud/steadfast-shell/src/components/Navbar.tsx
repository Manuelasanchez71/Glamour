// src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); // Obtén la ubicación actual
  const navigate = useNavigate(); // Hook para redirigir
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Estado de autenticación

  // Comprobar el estado de autenticación al cargar el componente
  useEffect(() => {
    const user = localStorage.getItem('user'); // Recupera el estado de autenticación del almacenamiento local
    setIsAuthenticated(Boolean(user)); // Actualiza el estado de autenticación
  }, []);

  // Función para manejar la navegación a "Cuidado Facial"
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isAuthenticated) {
      e.preventDefault(); // Prevenir la navegación si no está autenticado
      alert('Debe registrarse e iniciar sesión para acceder a esta página.');
      navigate('/login'); // Redirigir al usuario a la página de inicio de sesión
    } else {
      navigate('/agendar-cita'); // Redirigir a "Cuidado Facial"
    }
  };

  // Función para manejar el cierre de sesión
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3002/api/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Incluir credenciales en la solicitud
      });

      if (response.ok) {
        // Eliminar la información del usuario del almacenamiento local
        localStorage.removeItem('user'); 
        setIsAuthenticated(false); // Actualiza el estado de autenticación
        navigate('/login'); // Redirigir al usuario a la página de inicio de sesión
      } else {
        const errorData = await response.json();
        console.error('Error al cerrar sesión:', errorData.message);
        alert(`Error al cerrar sesión: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      alert('Error de conexión. Inténtelo de nuevo.');
    }
  };

  return (
    <nav className="flex justify-between items-center bg-white p-4">
      {/* Logo que redirige a la página de inicio */}
      <Link to="/">
        <img src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726540630/dvmsdcgewtvdjuuey3xp.png" alt="Logo Glamour" className="w-20" />
      </Link>

      {/* Navegación */}
      <div className="flex space-x-4 items-center">
        <Link to="/" className="text-black">INICIO</Link>
        <Link to="/agendar-cita" className="text-black" onClick={handleNavigation}>CUIDADO FACIAL</Link>
      </div>

      {/* Búsqueda e icono de sesión */}
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          // Mostrar icono de cerrar sesión si el usuario está autenticado
          <button onClick={handleLogout}>
            <img src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726545526/cerrar-con-llave_jrjbws.png" alt="Cerrar Sesión" className="w-10 h-10" />
          </button>
        ) : (
          // Mostrar icono de inicio de sesión si el usuario no está autenticado
          <Link to="/login">
            <img src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726543099/tfx6gqpkvhaugkpwpfgi.png" alt="Iniciar Sesión" className="w-10 h-10" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
