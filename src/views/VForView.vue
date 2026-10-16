<template>
  <div class="view-container">
    <h2 class="title">Registros del Sistema (v-for)</h2>
    <p class="description">Iteración de un arreglo de objetos para construir una tabla de datos dinámica.</p>
    
    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Rol</th>
          <th>Último Acceso</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, index) in usuarios">
          <td>#{{ index + 1 }}</td>
          <td class="font-medium">{{ usuario.nombre }}</td>
          <td><span class="badge">{{ usuario.rol }}</span></td>
          <td class="text-gray">{{ usuario.acceso }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const usuarios = ref([
  { nombre: 'Admin_Root', rol: 'Administrador', acceso: 'Hace 2 min' },
  { nombre: 'Dev_Backend', rol: 'Desarrollador', acceso: 'Hace 1 hora' },
  { nombre: 'QA_Tester', rol: 'Auditor', acceso: 'Hace 5 horas' },
  { nombre: 'User_Guest', rol: 'Invitado', acceso: 'Ayer' }
])
</script>

<style scoped>
.title { color: #111827; margin-bottom: 0.5rem; }
.description { color: #6b7280; margin-bottom: 2rem; }
.data-table { width: 100%; border-collapse: collapse; text-align: left; }
.data-table th { background-color: #f9fafb; padding: 0.75rem 1rem; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb; }
.data-table td { padding: 1rem; border-bottom: 1px solid #e5e7eb; }
.font-medium { font-weight: 500; color: #111827; }
.text-gray { color: #6b7280; font-size: 0.875rem; }
.badge { background-color: #e0e7ff; color: #4338ca; padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
</style>