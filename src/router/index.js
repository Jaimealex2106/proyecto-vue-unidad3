import { createRouter, createWebHashHistory } from 'vue-router'
import VIfView from '../views/VIfView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VBindView from '../views/VBindView.vue'

const routes = [
  { path: '/', redirect: '/v-if' }, // Redirige al inicio
  { path: '/v-if', component: VIfView },
  { path: '/v-show', component: VShowView },
  { path: '/v-for', component: VForView },
  { path: '/v-bind', component: VBindView }
]

// Usamos createWebHashHistory para evitar problemas de rutas en GitHub Pages
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router