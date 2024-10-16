import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default {
  server: {
    port: 3000, // Forces Vite to use port 3000
    host: true, // Expose the server to your local network
  },
};
