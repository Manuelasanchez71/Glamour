// src/components/NavbarInicio.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarInicio: React.FC = () => {
  // URL de la imagen que deseas mostrar en el cuerpo
  const imageUrl = 'https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726546740/Post_para_Instagram_Manicura_Organico_Rosa_Blanco_nclpsp.png';

  return (
    <div>
      {/* Barra de navegación */}
      <nav className="flex justify-between items-center bg-white p-4">
        {/* Logo en el lado izquierdo */}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726540630/dvmsdcgewtvdjuuey3xp.png"
            alt="Logo Glamour"
            className="w-20"
          />
        </Link>

        {/* Enlace de "Inicio" centrado */}
        <div className="flex-grow flex justify-center">
          <Link to="/" className="text-black text-lg font-semibold">INICIO</Link>
        </div>

        {/* Icono de "Iniciar Sesión" en el lado derecho */}
        <div className="flex items-center">
          <Link to="/login">
            <img
              src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726543099/tfx6gqpkvhaugkpwpfgi.png"
              alt="Iniciar Sesión"
              className="w-10 h-10"
            />
          </Link>
        </div>
      </nav>

      {/* Contenedor de la imagen */}
      <div className="flex justify-center items-center mt-8">
        <img
          src={imageUrl}
          alt="Imagen de Cuerpo"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default NavbarInicio;
