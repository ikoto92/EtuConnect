
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // permet l’accès depuis n’importe quelle IP (utile pour WSL, Docker, etc.)
    port: 5173,      // port du serveur de dev
    open: true,       // ouvre le navigateur automatiquement
  },
})
