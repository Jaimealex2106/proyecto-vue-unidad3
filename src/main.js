import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // Estilos por defecto de vite

const app = createApp(App)
app.use(router)
app.mount('#app')