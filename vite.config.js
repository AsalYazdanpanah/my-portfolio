import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// اگه نام ریپوی تو چیز دیگه‌ایه، همینو عوض کن
const repoName = 'my-portfolio'

export default defineConfig({
  base: `/${repoName}/`,        // لازم برای GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'docs',             // خروجی برای Pages
    assetsDir: 'assets',        // پوشه‌ی دارایی‌ها
    rollupOptions: {
      // چند ورودی HTML: صفحه‌ی اصلی و صفحه‌ی About
      input: {
        main: 'index.html',
        about: 'about.html',
      },
    },
  },
})
