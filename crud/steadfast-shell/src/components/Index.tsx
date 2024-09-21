import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App'; // Asegúrate de que esta ruta apunta correctamente a app.tsx
import './styles/tailwind.css'; // Importa tus estilos de Tailwind

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Elemento con ID 'root' no encontrado en el DOM.");
}
