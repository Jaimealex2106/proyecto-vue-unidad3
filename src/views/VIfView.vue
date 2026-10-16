<template>
  <div class="view-container">
    <h2 class="title">Control de Existencias (v-if / v-else-if / v-else)</h2>
    <p class="description">Evalúa el nivel de stock de un producto para determinar su estado en el sistema.</p>
    
    <div class="control-panel">
      <label>Unidades en almacén:</label>
      <input type="number" v-model="stock" class="input-field" min="0" />
      
      <div class="status-card">
        <div v-if="stock > 50" class="alert alert-success">
          <strong>🟢 Stock Óptimo:</strong> Hay suficientes unidades disponibles para la venta.
        </div>
        <div v-else-if="stock > 0 && stock <= 50" class="alert alert-warning">
          <strong>🟡 Alerta de Stock Bajo:</strong> Es necesario solicitar reabastecimiento pronto.
        </div>
        <div v-else class="alert alert-danger">
          <strong>🔴 Agotado:</strong> Producto no disponible para venta inmediata.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const stock = ref(120)
</script>

<style scoped>
.title { color: #111827; margin-bottom: 0.5rem; }
.description { color: #6b7280; margin-bottom: 2rem; }
.control-panel { background: #f9fafb; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; }
.input-field { padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem; width: 100px; margin-left: 10px; outline: none; }
.status-card { margin-top: 1.5rem; }
.alert { padding: 1rem; border-radius: 0.375rem; border-left: 4px solid; }
.alert-success { background-color: #f0fdf4; color: #166534; border-color: #22c55e; }
.alert-warning { background-color: #fffbeb; color: #92400e; border-color: #f59e0b; }
.alert-danger { background-color: #fef2f2; color: #991b1b; border-color: #ef4444; }
</style>