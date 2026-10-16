import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/proyecto-vue-unidad3/' // DEBE SER EL NOMBRE EXACTO DE TU REPOSITORIO EN GITHUB
})
