// src/components/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección

const Login: React.FC = () => {
  // Definir los estados para el formulario y el manejo de errores
  const [correo, setCorreo] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>(''); // Mensaje de éxito o error
  const [error, setError] = useState<string>(''); // Estado de error

  const navigate = useNavigate(); // Hook para redirigir

  // Función que se ejecutará cuando se envíe el formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar la recarga de la página

    const userData = { correo, password }; // Crear el objeto con los datos del usuario

    try {
      const response = await fetch('http://localhost:3002/api/users/login', { // <-- Cambio aquí
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Incluir credenciales en la solicitud
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setMensaje('Inicio de sesión exitoso');
        alert('Inicio de sesión exitoso');
        localStorage.setItem('user', JSON.stringify(data.user)); // Guarda el estado de autenticación
        navigate('/agendar-cita'); // Redirigir al usuario a "Agendar Cita" después del login
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      setError('Error de conexión');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F2D4D6]">
      {/* Logo */}
      <img
        src="https://res.cloudinary.com/dmhqb0cw0/image/upload/v1726541068/c0xpgqk7rewfcouiapg9.png"
        alt="Logo Glamour"
        className="mb-6 w-24"
      />

      {/* Contenedor para el formulario de Iniciar Sesión */}
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md mx-4">
        {/* Título del formulario */}
        <h2 className="text-xl font-semibold mb-4 text-black">INICIAR SESIÓN</h2>

        {/* Mostrar mensajes de éxito o error */}
        {mensaje && <p className="text-green-500">{mensaje}</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Formulario de inicio de sesión */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-black">
            Correo
          </label>
          <input
            id="email"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)} // Actualizar el estado de correo
            placeholder="Correo"
            className="p-2 border-b-2 border-[#F2D4D6] bg-[#F2D4D6] focus:outline-none focus:border-pink-500"
            required
          />
          <label htmlFor="password" className="text-black">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de password
            placeholder="Contraseña"
            className="p-2 border-b-2 border-[#F2D4D6] bg-[#F2D4D6] focus:outline-none focus:border-pink-500"
            required
          />
          <button
            type="submit"
            className="bg-[#F2D4D6] text-black py-2 rounded-lg mt-4 hover:bg-pink-600"
          >
            Iniciar
          </button>
        </form>

        {/* Enlace para ir al formulario de registro */}
        <Link to="/registrar" className="mt-4 text-pink-600 hover:underline">
          Registrarme
        </Link>
      </div>
    </div>
  );
};

export default Login;
