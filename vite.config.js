import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // For root-relative paths
  plugins: [react()],
  build: {
    outDir: 'docs'  // GitHub Pages looks for this folder
  }
})
