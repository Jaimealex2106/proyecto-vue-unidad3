<template>
  <div class="view-container">
    <h2 class="title">Gestión de Módulos (v-bind:key)</h2>
    <p class="description">Uso obligatorio de <code>:key</code> al renderizar listas modificables para mantener la reactividad del DOM de forma eficiente.</p>
    
    <div class="module-container">
      <div class="actions">
        <button @click="agregarModulo" class="btn-add">+ Añadir Módulo</button>
        <button @click="restablecerModulos" class="btn-reset">↺ Restablecer</button>
      </div>

      <ul class="module-list">
        <li v-for="modulo in modulos" :key="modulo.id" class="module-item">
          <div class="module-info">
            <span class="module-id">ID: {{ modulo.id }}</span>
            <span class="module-name">{{ modulo.nombre }}</span>
          </div>
          <button @click="eliminarModulo(modulo.id)" class="btn-delete">Eliminar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modulosIniciales = [
  { id: 1045, nombre: 'Módulo de Facturación' },
  { id: 2098, nombre: 'Módulo de Recursos Humanos' },
  { id: 3012, nombre: 'Módulo de Analíticas' }
]

// Usamos el spread operator (...) para crear una copia de los iniciales
const modulos = ref([...modulosIniciales])
let nextId = 4000

const agregarModulo = () => {
  modulos.value.push({ id: nextId++, nombre: `Nuevo Módulo ${nextId}` })
}

const eliminarModulo = (id) => {
  modulos.value = modulos.value.filter(m => m.id !== id)
}

const restablecerModulos = () => {
  modulos.value = [...modulosIniciales]
  nextId = 4000
}
</script>

<style scoped>
.title { color: #111827; margin-bottom: 0.5rem; }
.description { color: #6b7280; margin-bottom: 2rem; }
.module-container { border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1.5rem; }
.actions { margin-bottom: 1rem; display: flex; gap: 10px; }
.btn-add { background-color: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer; }
.btn-add:hover { background-color: #059669; }
.btn-reset { background-color: #6b7280; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer; }
.btn-reset:hover { background-color: #4b5563; }
.module-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.module-item { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.375rem; }
.module-info { display: flex; gap: 1rem; }
.module-id { color: #6b7280; font-family: monospace; }
.module-name { font-weight: 500; }
.btn-delete { background-color: transparent; color: #ef4444; border: 1px solid #ef4444; padding: 0.25rem 0.75rem; border-radius: 0.375rem; cursor: pointer; }
.btn-delete:hover { background-color: #fef2f2; }
</style>