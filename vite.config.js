import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',  // Must match your repo name exactly
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets'  // Explicit assets directory
  }
})
