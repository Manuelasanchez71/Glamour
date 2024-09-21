import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    host: true, // Esto permite que el servidor escuche en todas las interfaces
    port: 4322, // Asegúrate de que coincida con el puerto expuesto en Docker
    proxy: {
      '/api': {
        target: 'http://backend:3002', // Redirige las solicitudes a tu backend en Docker
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
