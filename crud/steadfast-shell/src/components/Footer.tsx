// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white p-4 text-center">
      <div className="flex justify-center items-center space-x-6">
        {/* Información de contacto */}
        <p className="text-black">Calle 111 #34CC 134, Medellín-Antioquia</p>
        <p className="text-black">Teléfono: 3239495</p>
        <p className="text-black">Email: glamourshine@cliente.com</p>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        {/* Íconos de redes sociales */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726544773/facebook_vivlvv.png" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726544773/instagram_s3grgp.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726544773/tik-tok_hx0e22.png" alt="TikTok" className="w-6 h-6" />
        </a>
      </div>
      {/* Espacio para el logo */}
      <div className="mt-4">
        <img src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726540630/dvmsdcgewtvdjuuey3xp.png" alt="Logo Glamour" className="w-24 mx-auto" />
      </div>
    </footer>
  );
};

export default Footer;
